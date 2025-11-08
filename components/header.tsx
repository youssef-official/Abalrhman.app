"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AC</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-primary">أكاديمية الأكواد</h1>
            <p className="text-xs text-muted-foreground">ACode Academy</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#courses" className="text-sm font-medium hover:text-primary transition">
            الدروس
          </a>
          <a href="#categories" className="text-sm font-medium hover:text-primary transition">
            التخصصات
          </a>
          <a href="#instructor" className="text-sm font-medium hover:text-primary transition">
            عن المدرب
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a
              href="https://www.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              اشترك الآن
            </a>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#courses" className="text-sm font-medium hover:text-primary">
              الدروس
            </a>
            <a href="#categories" className="text-sm font-medium hover:text-primary">
              التخصصات
            </a>
            <a href="#instructor" className="text-sm font-medium hover:text-primary">
              عن المدرب
            </a>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a
                href="https://www.youtube.com/channel/UChYOfUMgT20CkftUZ7AOwlQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                اشترك الآن
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
