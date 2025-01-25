import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AccessibilitySettings from "@/components/AccessibilitySettings"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkillUp - Learn, Share, and Connect",
  description:
    "Discover a community where skills are developed and shared. Join SkillUp to learn new skills and share your expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        {children}
        <AccessibilitySettings />
      </body>
    </html>
  )
}

