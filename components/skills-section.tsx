"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

// Define skill categories with their logos
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "C", color: "#A8B9CC" },
      { name: "C++", icon: "C++", color: "#00599C" },
      { name: "Python", icon: "Py", color: "#3776AB" },
      { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
      { name: "HTML", icon: "HTML", color: "#E34F26" },
      { name: "CSS", icon: "CSS", color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", icon: "Next", color: "#000000" },
      { name: "Node.js", icon: "Node", color: "#339933" },
      { name: "FastAPI", icon: "Fast", color: "#009688" },
      { name: "Flask", icon: "Flask", color: "#000000" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "Git", color: "#F05032" },
      { name: "VS Code", icon: "VS", color: "#007ACC" },
      { name: "Visual Studio", icon: "VS", color: "#5C2D91" },
    ],
  },
]

export default function SkillsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category.title}</h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <motion.div
                      className="text-2xl mb-2 font-mono font-bold"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "mirror",
                        duration: 2,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </motion.div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

