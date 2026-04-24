'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function CologneModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const liquidRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(time * 0.6) * 0.05
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.12,
      0.05
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.12 + time * 0.06,
      0.05
    )

    if (liquidRef.current) {
      const mat = liquidRef.current.material as THREE.MeshPhysicalMaterial
      mat.opacity = 0.6 + Math.sin(time * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.4}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.8, 1.4, 0.4]} />
          <meshPhysicalMaterial
            color="#f5f5f0"
            metalness={0.1}
            roughness={0.05}
            transmission={0.9}
            thickness={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>

        <mesh ref={liquidRef} position={[0, -0.1, 0]}>
          <boxGeometry args={[0.7, 1.0, 0.3]} />
          <meshPhysicalMaterial
            color="#1a1200"
            metalness={0.2}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.3, 32]} />
          <meshStandardMaterial color="#c9b037" metalness={1} roughness={0.05} />
        </mesh>

        <mesh position={[0, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.15, 0.4, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0, 0, 0.21]}>
          <planeGeometry args={[0.5, 0.6]} />
          <meshStandardMaterial color="#f5f5f0" metalness={0.1} roughness={0.8} />
        </mesh>

        <mesh position={[0, 0.1, 0.22]}>
          <planeGeometry args={[0.3, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.05, 0.22]}>
          <planeGeometry args={[0.2, 0.02]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  )
}
