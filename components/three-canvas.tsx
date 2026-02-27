"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls, Text } from "@react-three/drei"
import { type Mesh, type Group, Vector3, MathUtils } from "three"

function Model({ onClick }: { onClick: () => void }) {
  const meshRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { camera } = useThree()
  const scaleRef = useRef(0)

  const { scene } = useGLTF("/porygon.glb")

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame((state) => {
    if (!meshRef.current) return

    // Animate scale up on load (replaces framer-motion-3d animation)
    if (groupRef.current) {
      scaleRef.current = MathUtils.lerp(scaleRef.current, 1, 0.08)
      groupRef.current.scale.setScalar(scaleRef.current)
    }

    const mouse = new Vector3(state.mouse.x * 0.3, state.mouse.y * 0.3, 0)
    const rotationSpeed = hovered ? 0.015 : 0.005
    meshRef.current.rotation.y += rotationSpeed

    if (clicked) {
      meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, 0, 0.1)
    } else {
      meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, -1, 0.1)
    }

    meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, mouse.x, 0.1)
    meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, mouse.y + (clicked ? 0 : -1), 0.1)
  })

  const handleClick = () => {
    setClicked(!clicked)
    onClick()
  }

  return (
    <group ref={groupRef}>
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
    </group>
  )
}

export default function ThreeCanvas() {
  const [modelClicked, setModelClicked] = useState(false)

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: "transparent" }} shadows>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Model onClick={() => setModelClicked(!modelClicked)} />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={modelClicked}
          enablePan={modelClicked}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
