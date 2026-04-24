'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export default function ElectronicsModel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(time * 0.4) * 0.04
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.1,
      0.04
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.1 + time * 0.04,
      0.04
    )

    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.2
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.2} rotation={[0.1, 0, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.0, 2.0, 0.12]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>

        <mesh ref={screenRef} position={[0, 0, 0.07]}>
          <boxGeometry args={[0.9, 1.9, 0.01]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive="#c9b037"
            emissiveIntensity={0.5}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.02, 2.02, 0.08]} />
          <meshStandardMaterial color="#8a8a8a" metalness={1} roughness={0.1} />
        </mesh>

        <mesh position={[0.25, 0.7, -0.1]}>
          <boxGeometry args={[0.35, 0.35, 0.08]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
        </mesh>

        <mesh position={[0.25, 0.7, -0.15]}>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
          <meshStandardMaterial color="#141414" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[0.52, 0.3, 0]}>
          <boxGeometry args={[0.02, 0.15, 0.05]} />
          <meshStandardMaterial color="#8a8a8a" metalness={1} roughness={0.1} />
        </mesh>

        <mesh position={[0, -1.01, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.06]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  )
}
