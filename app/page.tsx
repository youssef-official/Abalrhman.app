import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { CategoriesSection } from "@/components/categories-section"
import { InstructorSection } from "@/components/instructor-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <HeroSection />
      <CoursesSection />
      <CategoriesSection />
      <InstructorSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
