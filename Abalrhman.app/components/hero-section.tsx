import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🎓 منصة تعليمية متخصصة
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          تعلم البرمجة من{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">الصفر</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          اكتشف مجموعة شاملة من الدروس والشروحات في البرمجة وتطوير الويب مع أفضل الممارسات والمشاريع العملية
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="https://www.youtube.com/channel/ACodeAcademy" target="_blank" rel="noopener noreferrer">
              ابدأ التعلم الآن <ArrowRight className="w-4 h-4 mr-2" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#courses">استكشف الدروس</a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">150+</div>
            <p className="text-sm text-muted-foreground">فيديو تعليمي</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">12+</div>
            <p className="text-sm text-muted-foreground">مجال تخصص</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">10K+</div>
            <p className="text-sm text-muted-foreground">متعلم نشط</p>
          </div>
        </div>
      </div>
    </section>
  )
}
