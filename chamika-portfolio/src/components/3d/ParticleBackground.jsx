"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

const ParticleBackground = () => {
  const ref = useRef()

  // Generate random particles
  const particles = useMemo(() => {
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Position
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Color
      colors[i3] = Math.random() * 0.5 + 0.5 // R
      colors[i3 + 1] = Math.random() * 0.5 + 0.5 // G
      colors[i3 + 2] = Math.random() * 0.5 + 0.5 // B
    }

    return {
      positions,
      colors,
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05
      ref.current.rotation.y += delta * 0.075
    }
  })

  return (
    <group>
      <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default ParticleBackground
