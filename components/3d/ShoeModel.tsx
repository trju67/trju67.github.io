'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function ShoeModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(time * 0.4) * 0.06
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.15,
      0.05
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.15 + time * 0.08,
      0.05
    )
  })

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.3} rotation={[0.2, 0, 0]}>
        <mesh position={[0, -0.3, 0]} castShadow>
          <boxGeometry args={[1.2, 0.15, 2.8]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.7} />
        </mesh>

        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[1.15, 0.1, 2.7]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.1} roughness={0.5} />
        </mesh>

        <mesh position={[0, 0.2, 0.1]} castShadow>
          <boxGeometry args={[1.1, 0.6, 2.2]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
        </mesh>

        <mesh position={[0, 0.1, -1.2]}>
          <sphereGeometry args={[0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#141414" metalness={0.4} roughness={0.6} />
        </mesh>

        <mesh position={[0, 0.25, 1.3]}>
          <boxGeometry args={[1.05, 0.5, 0.3]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.4} />
        </mesh>

        <mesh position={[0.56, 0.1, 0]}>
          <boxGeometry args={[0.02, 0.08, 1.8]} />
          <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.05} />
        </mesh>
        <mesh position={[-0.56, 0.1, 0]}>
          <boxGeometry args={[0.02, 0.08, 1.8]} />
          <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.05} />
        </mesh>

        <mesh position={[0, 0.55, -0.3]}>
          <boxGeometry args={[0.7, 0.05, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
        </mesh>

        {[0, 0.3, 0.6].map((z, i) => (
          <mesh key={i} position={[0, 0.58, -0.6 + z]}>
            <boxGeometry args={[0.6, 0.02, 0.02]} />
            <meshStandardMaterial color="#a3a3a3" metalness={0.1} roughness={0.8} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}
