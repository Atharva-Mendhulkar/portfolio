"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import ReactIcon from "../public/react-logo-svgrepo-com.svg"
import NextJsIcon from "../public/nextjs-fill-svgrepo-com.svg"
import TypeScriptIcon from "../public/typescript-official-svgrepo-com.svg"
import NodeJsIcon from "../public/nodejs-1-logo-svgrepo-com.svg"
import MongoDBIcon from "../public/mongo-svgrepo-com.svg"
import ExpressIcon from "../public/express-svgrepo-com.svg"
import TailwindCSSIcon from "../public/tailwind-svgrepo-com.svg"
import PythonIcon from "../public/python-svgrepo-com.svg"
import CppIcon from "../public/cpp3-svgrepo-com.svg"
import ThreeJsIcon from "../public/Threejs-alt-2-svgrepo-com.svg"
import FramerMotionIcon from "../public/framer-svgrepo-com.svg"
import GitIcon from "../public/git-svgrepo-com.svg"

const technologies = [
  { name: "React", icon: ReactIcon, color: "#61DAFB" },
  { name: "Next.js", icon: NextJsIcon, color: "#FFFFFF" },
  { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
  { name: "Node.js", icon: NodeJsIcon, color: "#339933" },
  { name: "MongoDB", icon: MongoDBIcon, color: "#47A248" },
  { name: "Express", icon: ExpressIcon, color: "#000000" },
  { name: "TailwindCSS", icon: TailwindCSSIcon, color: "#06B6D4" },
  { name: "Python", icon: PythonIcon, color: "#3776AB" },
  { name: "C++", icon: CppIcon, color: "#00599C" },
  { name: "Three.js", icon: ThreeJsIcon, color: "#000000" },
  { name: "Framer Motion", icon: FramerMotionIcon, color: "#0055FF" },
  { name: "Git", icon: GitIcon, color: "#F05032" },
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
            className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center border shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="text-2xl mb-2" style={{ color: tech.color }}>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

