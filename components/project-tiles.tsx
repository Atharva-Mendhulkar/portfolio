"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Apple Website Clone",
    description: "A high-fidelity clone of Apple's website",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/Atharva-Mendhulkar/apple-clone",
    demo: "https://apple-clone-peach-psi.vercel.app/",
  },
  {
    id: 2,
    title: "SereneShe",
    description: "Women-centric wellness platform",
    tags: ["Next.js", "TypeScript", "Radix UI"],
    github: "https://github.com/Atharva-Mendhulkar/serene-she",
    demo: "https://serene-she.vercel.app",
  },
  {
    id: 3,
    title: "AaiCARE",
    description: "AI-powered maternal health app",
    tags: ["Next.js", "FastAPI", "Python"],
    github: "https://github.com/Atharva-Mendhulkar/aaicare",
    demo: "https://aaicare.vercel.app",
  },
]

export default function ProjectTiles() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto p-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: project.id * 0.1 }}
            className="relative min-h-[280px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ y: -5 }}
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Link>

                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  View Demo
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-white/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

