import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const courseDetails = {
  "javascript-basics": {
    title: "أساسيات JavaScript",
    description: "تعلم أساسيات لغة JavaScript من الصفر",
    duration: "8 ساعات",
    lessons: 24,
    level: "مبتدئ",
    content: "في هذا الدرس ستتعلم كل شيء عن JavaScript بدءاً من المتغيرات والعمليات الحسابية إلى الدوال والكائنات",
  },
  "react-mastery": {
    title: "React من الصفر للاحترافية",
    description: "اتقن React وابني تطبيقات ويب احترافية",
    duration: "12 ساعة",
    lessons: 36,
    level: "متوسط",
    content: "دورة شاملة عن React تغطي الـ Hooks والـ Context والـ State Management",
  },
  "nextjs-modern-apps": {
    title: "Next.js والتطبيقات الحديثة",
    description: "بناء تطبيقات ويب حديثة مع Next.js",
    duration: "10 ساعات",
    lessons: 30,
    level: "متقدم",
    content: "تعلم Next.js والـ Server Components والـ API Routes لبناء تطبيقات احترافية",
  },
  "typescript-advanced": {
    title: "TypeScript المتقدم",
    description: "اتقن TypeScript وكتابة أكواد آمنة",
    duration: "6 ساعات",
    lessons: 18,
    level: "متقدم",
    content: "دورة متقدمة في TypeScript تغطي الـ Generics والـ Advanced Types",
  },
  "database-design": {
    title: "تصميم قواعد البيانات",
    description: "تعلم تصميم قواعد بيانات احترافية",
    duration: "9 ساعات",
    lessons: 27,
    level: "متوسط",
    content: "تصميم قواعد البيانات والـ SQL والـ Normalization",
  },
  "tailwind-css-pro": {
    title: "Tailwind CSS الاحترافي",
    description: "اتقن Tailwind CSS وبني واجهات جميلة",
    duration: "5 ساعات",
    lessons: 15,
    level: "مبتدئ",
    content: "دورة شاملة عن Tailwind CSS من الأساسيات إلى المتقدم",
  },
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseDetails[params.slug as keyof typeof courseDetails]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">الدرس غير موجود</h1>
          <Button asChild>
            <Link href="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8 bg-transparent">
          <Link href="/">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              {course.level}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{course.description}</p>

          <Card className="p-8 mb-8">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-primary">{course.duration}</div>
                <p className="text-muted-foreground">المدة الإجمالية</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">{course.lessons}</div>
                <p className="text-muted-foreground">عدد الدروس</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{course.level}</div>
                <p className="text-muted-foreground">مستوى الدرس</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">وصف الدرس</h2>
            <p className="text-muted-foreground mb-8">{course.content}</p>

            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
              <a href="https://www.youtube.com/channel/ACodeAcademy" target="_blank" rel="noopener noreferrer">
                ابدأ الدرس على اليوتيوب
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
