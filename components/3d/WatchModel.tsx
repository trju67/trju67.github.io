'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function WatchModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(time * 0.5) * 0.05
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.1,
      0.05
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.1 + time * 0.1,
      0.05
    )
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.2}>
        <mesh castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.2, 64]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[0, 0.11, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.02, 64]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.2} />
        </mesh>

        <mesh position={[0, 0.12, 0]}>
          <torusGeometry args={[0.75, 0.03, 16, 100]} />
          <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.05} />
        </mesh>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const angle = (i / 12) * Math.PI * 2
          return (
            <mesh
              key={i}
              position={[Math.sin(angle) * 0.55, 0.13, Math.cos(angle) * 0.55]}
              rotation={[0, -angle, 0]}
            >
              <boxGeometry args={[0.04, 0.02, 0.08]} />
              <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.1} />
            </mesh>
          )
        })}

        <mesh position={[0, 0.14, -0.15]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[0.02, 0.01, 0.4]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.1, 0.14, 0]} rotation={[0, 0, -0.8]}>
          <boxGeometry args={[0.3, 0.01, 0.02]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0.85, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.1} />
        </mesh>

        <mesh position={[0, 0, -1.1]}>
          <boxGeometry args={[0.5, 0.08, 1.2]} />
          <meshStandardMaterial color="#1a1200" metalness={0.1} roughness={0.9} />
        </mesh>

        <mesh position={[0, 0, 1.1]}>
          <boxGeometry args={[0.5, 0.08, 1.2]} />
          <meshStandardMaterial color="#1a1200" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>
    </Float>
  )
}
