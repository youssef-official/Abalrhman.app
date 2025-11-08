import { Card } from "@/components/ui/card"
import { Code2, Database, Palette, Zap, GitBranch, Cloud } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "الويب (Web)",
    icon: Code2,
    description: "تعلم تطوير تطبيقات الويب الحديثة",
    courses: 24,
    color: "from-primary",
  },
  {
    id: 2,
    name: "قواعد البيانات",
    icon: Database,
    description: "تصميم واستخدام قواعد البيانات",
    courses: 12,
    color: "from-secondary",
  },
  {
    id: 3,
    name: "التصميم (Design)",
    icon: Palette,
    description: "تصميم الواجهات وتجربة المستخدم",
    courses: 15,
    color: "from-primary",
  },
  {
    id: 4,
    name: "الأداء والتحسين",
    icon: Zap,
    description: "تحسين سرعة وأداء التطبيقات",
    courses: 8,
    color: "from-secondary",
  },
  {
    id: 5,
    name: "التحكم بالإصدارات",
    icon: GitBranch,
    description: "استخدام Git والعمل الجماعي",
    courses: 6,
    color: "from-primary",
  },
  {
    id: 6,
    name: "البنية السحابية",
    icon: Cloud,
    description: "نشر التطبيقات على الخوادم السحابية",
    courses: 10,
    color: "from-secondary",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">المجالات والتخصصات</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استكشف مختلف المجالات التقنية والتخصصات المتاحة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div
                  className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.color} to-secondary/50 text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm font-medium text-primary">{category.courses} دروس</span>
                  <span className="text-xs text-muted-foreground">→</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
