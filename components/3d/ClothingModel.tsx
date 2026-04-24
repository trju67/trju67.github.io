'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function ClothingModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(time * 0.3) * 0.04
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.08,
      0.04
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.08 + time * 0.05,
      0.04
    )
  })

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.25}>
      <group ref={groupRef} scale={1.1}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.6, 2.2, 0.4]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} side={THREE.DoubleSide} />
        </mesh>

        <mesh position={[-1.1, 0.3, 0]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.5, 1.8, 0.35]} />
          <meshStandardMaterial color="#141414" metalness={0.1} roughness={0.9} />
        </mesh>

        <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, -0.15]} castShadow>
          <boxGeometry args={[0.5, 1.8, 0.35]} />
          <meshStandardMaterial color="#141414" metalness={0.1} roughness={0.9} />
        </mesh>

        <mesh position={[0, 1.2, 0.05]}>
          <boxGeometry args={[0.8, 0.3, 0.45]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.2} roughness={0.8} />
        </mesh>

        {[0.5, 0.1, -0.3].map((yPos, i) => (
          <mesh key={i} position={[0.3, yPos, 0.21]}>
            <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
            <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.05} />
          </mesh>
        ))}

        <mesh position={[-0.4, 0.2, 0.21]}>
          <boxGeometry args={[0.4, 0.5, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>
    </Float>
  )
}
