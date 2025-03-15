import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atharva | Aspiring SWE & Competitive Programmer",
  description: "Portfolio of Atharva - Aspiring SWE & Competitive Programmer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen">
            <Navbar />
            <ScrollProgress />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}