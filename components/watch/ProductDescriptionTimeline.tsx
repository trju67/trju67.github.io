'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { WatchStoryProduct } from '@/lib/watch-product'
import { useCart } from '@/lib/store'
import { Product } from '@/lib/data'

interface ProductDescriptionTimelineProps {
  product: WatchStoryProduct
  activeStage: number
}

export default function ProductDescriptionTimeline({
  product,
  activeStage,
}: ProductDescriptionTimelineProps) {
  const stage = product.stages[activeStage] ?? product.stages[0]
  const detailsRef = useRef<HTMLDivElement>(null)
  const addItem = useCart((state) => state.addItem)
  const [added, setAdded] = useState(false)

  const cartProduct: Product = {
    id: product.slug,
    slug: product.slug,
    name: product.name,
    category: 'watches',
    price: product.price,
    description: product.shortDescription,
    details: Object.values(product.specs),
    image: product.tileImageSrc,
    modelType: 'watch',
  }

  const handleAddToBag = () => {
    addItem({ product: cartProduct, quantity: 1 })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  const handleViewDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="flex flex-col pb-20 pt-8 lg:max-w-[520px] lg:pt-14">
      <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-aura-gold/80 [font-family:var(--font-brand)]">
        <span>{product.collection}</span>
        <span className="h-px w-14 bg-aura-gold/30" />
        <span>{product.priceLabel}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -22, filter: 'blur(10px)' }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.36em] text-aura-gray [font-family:var(--font-brand)]">
            {stage.eyebrow}
          </p>

          <h1 className="mb-7 text-4xl font-normal uppercase leading-[1.04] tracking-[0.08em] text-aura-ivory [font-family:var(--font-display)] md:text-6xl">
            {activeStage === 0 ? product.name : stage.title}
          </h1>

          <p className="max-w-xl text-lg leading-8 text-aura-gray md:text-xl">
            {stage.copy}
          </p>

          <div className="mt-9 grid gap-3">
            {stage.details.map((detail) => (
              <div
                key={detail}
                className="flex items-center gap-3 text-sm uppercase tracking-[0.16em] text-aura-ivory/82 [font-family:var(--font-brand)]"
              >
                <span className="h-px w-8 bg-aura-gold/50" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              data-cursor="Bag"
              onClick={handleAddToBag}
              className="rounded-full bg-aura-ivory px-7 py-3 text-[10px] uppercase tracking-[0.22em] text-aura-black transition duration-500 ease-luxury hover:bg-aura-gold [font-family:var(--font-brand)]"
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>
            <button
              type="button"
              data-cursor="Details"
              onClick={handleViewDetails}
              className="rounded-full border border-aura-ivory/15 px-7 py-3 text-[10px] uppercase tracking-[0.22em] text-aura-ivory transition duration-500 ease-luxury hover:border-aura-gold hover:text-aura-gold [font-family:var(--font-brand)]"
            >
              View Details
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div ref={detailsRef} className="mt-14 grid scroll-mt-32 grid-cols-2 gap-x-8 gap-y-5 border-t border-aura-ivory/10 pt-8">
        {Object.entries(product.specs).map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-aura-gold/70 [font-family:var(--font-brand)]">
              {label}
            </p>
            <p className="text-sm leading-6 text-aura-gray">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-2">
        {product.stages.map((item, index) => (
          <span
            key={item.eyebrow}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              index === activeStage ? 'bg-aura-gold' : 'bg-aura-ivory/12'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
