import GitHubStats from "@/components/github-stats"
import LeetCodeStats from "@/components/leetcode-stats"
import TechStack from "@/components/tech-stack"
import SocialLinks from "@/components/social-links"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Trophy } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm border shadow-sm">
                  About Me
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">👋 Hi, I'm Atharva!</h1>
                <div className="space-y-4 text-muted-foreground">
                  <p>🚀 Aspiring Software Engineer | Competitive Programmer | Tech Enthusiast</p>
                  <p>
                    I'm a 1st-year IT Undergrad at VIT Vellore with a passion for DSA, Web Development, and AI/ML. I
                    enjoy competitive programming on platforms like Codeforces, CodeChef & LeetCode, and I'm constantly
                    exploring Full Stack Development & AI and ML applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border shadow-sm">
              <h2 className="text-xl font-bold mb-4">Current Focus</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 mt-1 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Improving CP Skills</h3>
                    <p className="text-sm text-gray-400">Working on advanced algorithms and data structures</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 mt-1 text-purple-500" />
                  <div>
                    <h3 className="font-medium">Full Stack Development</h3>
                    <p className="text-sm text-gray-400">Building projects with the MERN stack</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <h3 className="font-medium">AI/ML Exploration</h3>
                    <p className="text-sm text-gray-400">Learning fundamentals of machine learning</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h2 className="text-xl font-bold mb-4">CP Ratings</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <Trophy className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                    <p className="text-lg font-bold">951</p>
                    <p className="text-xs text-gray-400">Codeforces</p>
                  </div>

                  <div className="bg-muted rounded-lg p-3 text-center">
                    <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                    <p className="text-lg font-bold">1328</p>
                    <p className="text-xs text-gray-400">CodeChef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GitHubStats />
            <LeetCodeStats />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <TechStack />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <SocialLinks />

          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

