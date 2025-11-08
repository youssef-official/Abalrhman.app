"use client"

import { Card } from "@/components/ui/card"
import { Play, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "أساسيات JavaScript",
    category: "JavaScript",
    duration: "8 ساعات",
    lessons: 24,
    image: "/javascript-programming-course.jpg",
    level: "مبتدئ",
    views: "5,234",
    slug: "javascript-basics",
  },
  {
    id: 2,
    title: "React من الصفر للاحترافية",
    category: "React",
    duration: "12 ساعة",
    lessons: 36,
    image: "/react-web-development.jpg",
    level: "متوسط",
    views: "8,912",
    slug: "react-mastery",
  },
  {
    id: 3,
    title: "Next.js والتطبيقات الحديثة",
    category: "Next.js",
    duration: "10 ساعات",
    lessons: 30,
    image: "/next-js-full-stack-development.jpg",
    level: "متقدم",
    views: "6,543",
    slug: "nextjs-modern-apps",
  },
  {
    id: 4,
    title: "TypeScript المتقدم",
    category: "TypeScript",
    duration: "6 ساعات",
    lessons: 18,
    image: "/typescript-programming.png",
    level: "متقدم",
    views: "4,123",
    slug: "typescript-advanced",
  },
  {
    id: 5,
    title: "تصميم قواعد البيانات",
    category: "Databases",
    duration: "9 ساعات",
    lessons: 27,
    image: "/database-design-sql.jpg",
    level: "متوسط",
    views: "7,234",
    slug: "database-design",
  },
  {
    id: 6,
    title: "Tailwind CSS الاحترافي",
    category: "CSS",
    duration: "5 ساعات",
    lessons: 15,
    image: "/tailwind-css-styling.jpg",
    level: "مبتدئ",
    views: "9,876",
    slug: "tailwind-css-pro",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">الدروس المتاحة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من مجموعتنا الواسعة من الدروس المتخصصة والمشاريع العملية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-white" />
                </div>
                <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} درس
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-t">
                  <span className="text-xs text-muted-foreground">{course.views} مشاهدة</span>
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">{course.category}</span>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90" size="sm">
                  <Link href={`/courses/${course.slug}`}>ابدأ التعلم</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a
              href="https://studio.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
              target="_blank"
              rel="noopener noreferrer"
            >
              عرض جميع الدروس على اليوتيوب
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
