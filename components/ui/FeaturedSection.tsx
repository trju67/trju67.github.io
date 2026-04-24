'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '@/lib/data'

export default function FeaturedSection() {
  const featured = products.filter((p) => p.isFeatured)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-aura-charcoal">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-aura-gold text-xs tracking-luxury uppercase mb-4">Curated</p>
            <h2 className="text-aura-ivory text-3xl md:text-5xl font-light tracking-tight">
              Featured Pieces
            </h2>
          </motion.div>

          <motion.a
            href="/collection"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block text-aura-ivory text-xs tracking-luxury uppercase border-b border-aura-ivory/30 pb-1 hover:border-aura-gold hover:text-aura-gold transition-colors duration-300"
          >
            View All
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
