"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#FFFFFF" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Express", icon: "🚂", color: "#000000" },
  { name: "TailwindCSS", icon: "🌊", color: "#06B6D4" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "C++", icon: "C++", color: "#00599C" },
  { name: "Three.js", icon: "3️⃣", color: "#000000" },
  { name: "Framer Motion", icon: "🔄", color: "#0055FF" },
  { name: "Git", icon: "🔄", color: "#F05032" },
]

export default function TechStack() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="text-2xl mb-2" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p className="text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

