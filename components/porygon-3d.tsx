"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// Dynamically import Three.js components with no SSR to avoid hydration issues
const ThreeCanvas = dynamic(() => import("./three-canvas"), { ssr: false })

export default function Porygon3D() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return a placeholder while on server or during hydration
    return (
      <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-900/30 rounded-lg">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="text-center"
        >
          <div className="text-xl font-bold text-gradient mb-2">Loading 3D Model</div>
          <div className="text-sm text-gray-400">Preparing your experience...</div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gray-900/30 rounded-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-gradient mb-2">Loading 3D Model</div>
              <div className="text-sm text-gray-400">Almost there...</div>
            </div>
          </div>
        }
      >
        <ThreeCanvas />
      </Suspense>
    </div>
  )
}

