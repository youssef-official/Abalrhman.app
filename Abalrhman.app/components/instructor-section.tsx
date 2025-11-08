import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, MessageCircle, MessageSquare, Facebook } from "lucide-react"

export function InstructorSection() {
  return (
    <section id="instructor" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">المدرب</h2>
          <p className="text-lg text-muted-foreground">تعرف على صاحب الأكاديمية</p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex items-center justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                عبدالرحمن
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-2">عبدالرحمن محمد لطفي</h3>
              <p className="text-lg text-secondary font-semibold mb-6">مؤسس أكاديمية الأكواد</p>

              <p className="text-muted-foreground mb-4">
                مهندس برمجيات متخصص في تطوير تطبيقات الويب الحديثة بخبرة أكثر من 8 سنوات في الصناعة. متحمس لتعليم
                البرمجة وتمكين الأجيال الجديدة من المطورين.
              </p>

              <p className="text-muted-foreground mb-8">
                درست الهندسة والبرمجة في أفضل الجامعات، وعملت مع شركات عملاقة في مجال التكنولوجيا. الآن أكرس وقتي لنشر
                المعرفة البرمجية وتطوير كوادر محترفة.
              </p>

              <div className="flex gap-3 mb-8">
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-white bg-transparent"
                >
                  <a
                    href="https://www.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-white bg-transparent"
                >
                  <a
                    href="https://t.me/+8EyGjRpVVx9lMGY0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-white bg-transparent"
                >
                  <a
                    href="https://whatsapp.com/channel/0029VbBJXzP96H4LRpSAhE3M"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-white bg-transparent"
                >
                  <a
                    href="https://www.facebook.com/share/1DZR4ykVLL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a
                  href="https://www.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تابع على اليوتيوب
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <p className="text-muted-foreground">فيديو منشور</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
            <p className="text-muted-foreground">متابع على اليوتيوب</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">طالب مستفيد</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
