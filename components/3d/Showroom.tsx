'use client'

import { useState, useEffect, Suspense } from 'react'
import WatchModel from './WatchModel'
import ShoeModel from './ShoeModel'
import ClothingModel from './ClothingModel'
import CologneModel from './CologneModel'
import ElectronicsModel from './ElectronicsModel'

export default function Showroom({ activeCategory = 'watches' }: { activeCategory?: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const renderModel = () => {
    switch (activeCategory) {
      case 'watches': return <WatchModel mouse={mouse} />
      case 'shoes': return <ShoeModel mouse={mouse} />
      case 'clothes': return <ClothingModel mouse={mouse} />
      case 'cologne': return <CologneModel mouse={mouse} />
      case 'electronics': return <ElectronicsModel mouse={mouse} />
      default: return <WatchModel mouse={mouse} />
    }
  }

  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border border-aura-gold/50 rounded-full animate-spin" />
      </div>
    }>
      {renderModel()}
    </Suspense>
  )
}
