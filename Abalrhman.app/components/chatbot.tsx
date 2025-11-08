"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// قاعدة بيانات الإجابات المحلية
const botResponses: { [key: string]: string[] } = {
  default: ["مرحباً! كيف يمكنني مساعدتك؟", "لا فهمت سؤالك جيداً، يمكنك محاولة سؤال آخر؟"],
  courses: [
    "لدينا عدة دورات متاحة: JavaScript, TypeScript, React, Node.js, Python, وWeb Development",
    "تشمل دوراتنا شروحات فيديو وكتابية شاملة",
  ],
  instructor: [
    "المدرب: عبدالرحمن محمد لطفي - متخصص في تطوير الويب والبرمجة",
    "لديه خبرة واسعة في تعليم البرمجة بطريقة عملية وفعّالة",
  ],
  youtube: ["قناتنا على اليوتيوب: ACode Academy", "تابعنا للحصول على أحدث الدروس والتحديثات"],
  get_started: ["للبدء: اختر أحد الدورات من الصفحة الرئيسية", "انقر على 'ابدأ التعلم' لبدء الدرس الأول"],
  subscription: ["اشترك معنا للحصول على الوصول الكامل لجميع الدروس", "لا تفوت الفرصة للتعلم من المحترفين!"],
}

function findBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  if (message.includes("دور") || message.includes("course") || message.includes("ما المقررات")) {
    return botResponses.courses[Math.floor(Math.random() * botResponses.courses.length)]
  }
  if (message.includes("مدرب") || message.includes("عبدالرحمن") || message.includes("instructor")) {
    return botResponses.instructor[Math.floor(Math.random() * botResponses.instructor.length)]
  }
  if (message.includes("يوتيوب") || message.includes("youtube") || message.includes("قناة")) {
    return botResponses.youtube[Math.floor(Math.random() * botResponses.youtube.length)]
  }
  if (message.includes("ابدأ") || message.includes("ابدء") || message.includes("start") || message.includes("بدء")) {
    return botResponses.get_started[Math.floor(Math.random() * botResponses.get_started.length)]
  }
  if (message.includes("اشترك") || message.includes("subscribe") || message.includes("عضوية")) {
    return botResponses.subscription[Math.floor(Math.random() * botResponses.subscription.length)]
  }

  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "مرحباً! أنا مساعد أكاديمية الأكواد. كيف يمكنني مساعدتك؟",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // محاكاة تأخير طبيعي للرد
    await new Promise((resolve) => setTimeout(resolve, 600))

    const botResponse = findBotResponse(input)
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botMessage])
    setIsLoading(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300",
          "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
          "flex items-center justify-center w-14 h-14",
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-32px)] h-[500px] max-h-[60vh] flex flex-col shadow-2xl bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-lg">
            <h3 className="text-lg font-bold text-white">مساعد الأكاديمية</h3>
            <p className="text-sm text-blue-100">نحن هنا لمساعدتك!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex gap-3", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}>
                <div
                  className={cn(
                    "max-w-[70%] px-4 py-2 rounded-lg",
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-gray-300 text-gray-900 rounded-tl-none dark:bg-gray-700 dark:text-gray-100",
                  )}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg rounded-tl-none dark:bg-gray-700 dark:text-gray-100">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce dark:bg-gray-400" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100 dark:bg-gray-400" />
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200 dark:bg-gray-400" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-300 p-4 bg-white dark:bg-gray-900 dark:border-gray-700 rounded-b-lg"
          >
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="اكتب رسالتك..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 text-right"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
