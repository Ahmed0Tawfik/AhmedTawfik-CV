import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ahmed Tawfik - CV/Resume",
  description:
    "Computer Engineering student and Software Developer with expertise in .NET, JavaScript, and modern web technologies.",
  keywords: ["Ahmed Tawfik", "Software Developer", "Computer Engineering", ".NET", "JavaScript", "React", "CV", "Resume"],
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
