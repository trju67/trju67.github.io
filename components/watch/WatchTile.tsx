'use client'

import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { WatchStoryProduct } from '@/lib/watch-product'

interface WatchTileProps {
  product: WatchStoryProduct
}

export default function WatchTile({ product }: WatchTileProps) {
  const router = useRouter()
  const [opening, setOpening] = useState(false)

  const openDetail = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpening(true)

    window.setTimeout(() => {
      router.push(`/watch/${product.slug}`)
    }, 420)
  }

  return (
    <motion.a
      href={`/watch/${product.slug}`}
      onClick={openDetail}
      data-cursor="Open"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="group relative block overflow-hidden rounded-[2rem] bg-[#050505] text-aura-ivory"
    >
      <div className="relative min-h-[520px] overflow-hidden border border-aura-gold/10 bg-black md:min-h-[640px]">
        <motion.img
          src={product.tileImageSrc}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 ease-luxury group-hover:scale-[1.045]"
          whileHover={{ rotateX: 1.2, rotateY: -1.4 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,transparent_0,transparent_24%,rgba(0,0,0,0.2)_44%,rgba(0,0,0,0.92)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/54 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent" />

        <div className="absolute left-6 right-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-aura-gold/80 [font-family:var(--font-brand)] md:left-10 md:right-10 md:top-10">
          <span>{product.collection}</span>
          <span>{product.priceLabel}</span>
        </div>

        <div className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-aura-gray [font-family:var(--font-brand)]">
              Interactive Watch Story
            </p>
            <h2 className="text-4xl font-normal uppercase leading-none tracking-[0.09em] text-aura-ivory [font-family:var(--font-display)] md:text-6xl">
              {product.name}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-aura-gray md:text-lg">
              {product.shortDescription}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="rounded-full bg-aura-ivory px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-aura-black transition duration-500 group-hover:bg-aura-gold [font-family:var(--font-brand)]">
              Enter Detail
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-aura-ivory/50 [font-family:var(--font-brand)]">
              Scroll-controlled film
            </span>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 bg-aura-ivory"
          initial={{ y: '100%' }}
          animate={{ y: opening ? '0%' : '100%' }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </motion.a>
  )
}
