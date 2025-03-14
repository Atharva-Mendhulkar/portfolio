"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls, Text } from "@react-three/drei"
import { type Mesh, Vector3, MathUtils } from "three"
import { motion } from "framer-motion-3d"
import { MotionConfig } from "framer-motion"

function Model({ onClick }: { onClick: () => void }) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { camera } = useThree()

  // Update the model path to use Porygon
  const { scene } = useGLTF("/porygon.glb")

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame((state) => {
    if (!meshRef.current) return

    // Add subtle movement based on mouse position
    const mouse = new Vector3(state.mouse.x * 0.3, state.mouse.y * 0.3, 0)

    // Adjust rotation speed for Porygon
    const rotationSpeed = hovered ? 0.015 : 0.005
    meshRef.current.rotation.y += rotationSpeed

    // Move up when clicked
    if (clicked) {
      meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, 0, 0.1)
    } else {
      meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, -1, 0.1)
    }

    // Apply mouse movement
    meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, mouse.x, 0.1)
    meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, mouse.y + (clicked ? 0 : -1), 0.1)
  })

  const handleClick = () => {
    setClicked(!clicked)
    onClick()
  }

  return (
    <motion.group initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, type: "spring" }}>
      <primitive
        ref={meshRef}
        object={scene.clone()}
        scale={4}
        position={[0, -1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      />

      {hovered && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Regular.json"
        >
          Click me!
        </Text>
      )}
    </motion.group>
  )
}

export default function ThreeCanvas() {
  const [modelClicked, setModelClicked] = useState(false)

  const handleModelClick = () => {
    setModelClicked(!modelClicked)
  }

  return (
    <div className="w-full h-full">
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.001,
        }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: "transparent" }} shadows>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

          <Model onClick={handleModelClick} />
          <Environment preset="city" />

          <OrbitControls
            enableZoom={modelClicked}
            enablePan={modelClicked}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </MotionConfig>
    </div>
  )
}

