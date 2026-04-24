'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { products } from '@/lib/data'
import { useCart } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import { Heart, Share2, ChevronRight, Check } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import Footer from '@/components/ui/Footer'

const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false })
const WatchModel = dynamic(() => import('@/components/3d/WatchModel'), { ssr: false })
const ShoeModel = dynamic(() => import('@/components/3d/ShoeModel'), { ssr: false })
const ClothingModel = dynamic(() => import('@/components/3d/ClothingModel'), { ssr: false })
const CologneModel = dynamic(() => import('@/components/3d/CologneModel'), { ssr: false })
const ElectronicsModel = dynamic(() => import('@/components/3d/ElectronicsModel'), { ssr: false })

function ModelViewer({ type }: { type: string }) {
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
    switch (type) {
      case 'watch': return <WatchModel mouse={mouse} />
      case 'shoe': return <ShoeModel mouse={mouse} />
      case 'clothing': return <ClothingModel mouse={mouse} />
      case 'cologne': return <CologneModel mouse={mouse} />
      case 'electronics': return <ElectronicsModel mouse={mouse} />
      default: return <WatchModel mouse={mouse} />
    }
  }

  return (
    <Scene className="w-full h-[50vh] md:h-[70vh]">
      {renderModel()}
    </Scene>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-aura-black flex items-center justify-center">
        <p className="text-aura-gray">Product not found</p>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleAddToCart = () => {
    addItem({
      product,
      quantity: 1,
      size: selectedSize || undefined,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-aura-black">
      <div className="pt-24 pb-8 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex items-center gap-2 text-xs text-aura-gray tracking-wide">
          <span>Collection</span>
          <ChevronRight size={12} />
          <span className="capitalize">{product.category}</span>
          <ChevronRight size={12} />
          <span className="text-aura-ivory">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="bg-aura-charcoal relative"
          >
            <ModelViewer type={product.modelType} />

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="text-aura-gray text-xs tracking-wide">Drag to rotate • Move cursor for parallax</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`p-2 transition-colors ${wishlisted ? 'text-red-400' : 'text-aura-gray hover:text-aura-ivory'}`}
                >
                  <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2 text-aura-gray hover:text-aura-ivory transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="py-8 lg:py-16"
          >
            <p className="text-aura-gold text-xs tracking-luxury uppercase mb-4">{product.category}</p>
            <h1 className="text-aura-ivory text-3xl md:text-5xl font-light tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-aura-ivory text-xl md:text-2xl font-light mb-8">
              {formatPrice(product.price)}
            </p>

            <p className="text-aura-gray text-sm leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {product.sizes && (
              <div className="mb-8">
                <p className="text-aura-ivory text-xs tracking-luxury uppercase mb-4">Select Size</p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center text-xs border transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-aura-gold text-aura-gold bg-aura-gold/10'
                          : 'border-aura-charcoal text-aura-gray hover:border-aura-gray hover:text-aura-ivory'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mb-12">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 py-4 text-xs tracking-luxury uppercase font-medium transition-all duration-300 ${
                  added
                    ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                    : 'bg-aura-ivory text-aura-black hover:bg-aura-gold'
                }`}
              >
                {added ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check size={14} /> Added to Bag
                  </span>
                ) : (
                  'Add to Bag'
                )}
              </motion.button>
            </div>

            <div className="border-t border-aura-charcoal pt-8">
              <p className="text-aura-ivory text-xs tracking-luxury uppercase mb-4">Details</p>
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <li key={i} className="text-aura-gray text-sm flex items-start gap-3">
                    <span className="w-1 h-1 bg-aura-gold rounded-full mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-aura-charcoal mt-24">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-aura-ivory text-2xl md:text-3xl font-light mb-12 tracking-tight">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {related.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
