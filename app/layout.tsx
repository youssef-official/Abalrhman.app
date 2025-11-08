import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "أكاديمية الأكواد - ACode Academy | دروس برمجة احترافية",
  description:
    "أكاديمية الأكواد تقدم دروس برمجة احترافية في JavaScript, React, Python وغيرها. تعلم من عبدالرحمن محمد لطفي.",
  keywords: "برمجة, دروس برمجة, JavaScript, React, Python, تعليم برمجة, أكاديمية أكواد",
  generator: "v0.app",
  openGraph: {
    title: "أكاديمية الأكواد - دروس برمجة احترافية",
    description: "تعلم البرمجة من الصفر مع أفضل المدربين",
    type: "website",
    locale: "ar_SA",
    siteName: "أكاديمية الأكواد",
  },
  authors: [{ name: "عبدالرحمن محمد لطفي" }],
  creator: "عبدالرحمن محمد لطفي",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#6366f1" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://acode-academy.vercel.app" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
