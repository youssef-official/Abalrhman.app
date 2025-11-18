import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const openRouterApiKey = Deno.env.get("OPENROUTER_API_KEY");
    if (!openRouterApiKey) {
      throw new Error("OPENROUTER_API_KEY is not set in environment variables.");
    }

    const formData = await req.formData();
    const imageFile = formData.get("image");
    const prompt = formData.get("prompt");

    if (!imageFile || !(imageFile instanceof File)) {
      throw new Error("Image file is required.");
    }

    // Convert image to base64
    const imageBytes = await imageFile.arrayBuffer();
    const imageBase64 = btoa(String.fromCharCode(...new Uint8Array(imageBytes)));
    const imageUrl = `data:${imageFile.type};base64,${imageBase64}`;

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openRouterApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "nvidia/nemotron-nano-12b-v2-vl:free",
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "image_url",
                "image_url": {
                  "url": imageUrl,
                },
              },
              {
                "type": "text",
                "text": prompt,
              },
            ],
          },
        ],
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
