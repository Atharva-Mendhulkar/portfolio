"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Apple Website Clone",
    description: "A high-fidelity, responsive clone of Apple's website with smooth animations and a modern UI.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Atharva-Mendhulkar/apple-clone",
    demo: "https://apple-clone-peach-psi.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "SereneShe",
    description: "A women-centric platform focused on mental wellness, career growth, and self-improvement.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/Atharva-Mendhulkar/serene-she",
    demo: "https://serene-she.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "AaiCARE",
    description: "An AI-powered maternal health app with risk assessment, pregnancy tracking, and educational resources.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "React", "FastAPI", "Python", "Tailwind CSS", "AI","all"],
    github: "https://github.com/Atharva-Mendhulkar/aaicare",
    demo: "https://aaicare.vercel.app",
    featured: true,
  },
]

// Filter types
type FilterType = "all" | "featured" | "web" | "mobile" | "ai"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "featured") return project.featured
    if (filter === "web")
      return project.tags.some((tag) => ["React", "Next.js", "JavaScript", "HTML", "CSS"].includes(tag))
    if (filter === "mobile") return project.tags.some((tag) => ["React Native", "Flutter", "Mobile"].includes(tag))
    if (filter === "ai") return project.tags.some((tag) => ["AI", "Python", "FastAPI"].includes(tag))
    return true
  })

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work and personal projects.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className="rounded-full"
            >
              Featured
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="rounded-full"
            >
              Web
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => setFilter("mobile")}
              className="rounded-full"
            >
              Mobile
            </Button>
            <Button
              variant={filter === "ai" ? "default" : "outline"}
              onClick={() => setFilter("ai")}
              className="rounded-full"
            >
              AI/ML
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Want to see more of my work?</p>
            <Button asChild>
              <Link href="https://github.com/Atharva-Mendhulkar?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

