"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2, BookOpen, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Atharva-Mendhulkar", color: "#333" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/mendhu36", color: "#0077B5" },
  { name: "CodeForces", icon: Code2, url: "https://codeforces.com/profile/Atharva-mendhu", color: "#1F8ACB" },
  { name: "LeetCode", icon: BookOpen, url: "https://leetcode.com/mendhu36", color: "#FFA116" },
  { name: "Email", icon: Mail, url: "mailto:mendhu36@outlook.com", color: "#EA4335" },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
            style={{ backgroundColor: `${link.color}10` }}
          >
            <Icon className="w-5 h-5" style={{ color: link.color }} />
            <span className="sr-only">{link.name}</span>
          </motion.a>
        )
      })}
    </div>
  )
}

