'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/lib/data'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link href={`/product/${product.slug}`} data-cursor="View">
        <div className="group relative">
          <div className="aspect-[3/4] bg-aura-charcoal relative overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aura-black/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-aura-surface/50 blur-2xl group-hover:bg-aura-gold/20 transition-colors duration-700" />
            </div>

            {product.isNew && (
              <span className="absolute top-4 left-4 text-[10px] tracking-luxury uppercase text-aura-gold border border-aura-gold/30 px-3 py-1">
                New
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-aura-ivory text-sm font-medium group-hover:text-aura-gold transition-colors duration-300">
                {product.name}
              </h3>
              <span className="text-aura-ivory text-sm">{formatPrice(product.price)}</span>
            </div>
            <p className="text-aura-gray text-xs tracking-wide uppercase">{product.category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
