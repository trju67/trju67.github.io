'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { products, categories } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'
import Footer from '@/components/ui/Footer'

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-aura-black pt-32 pb-24">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-aura-ivory text-4xl md:text-6xl font-light tracking-tight mb-6">
            The Collection
          </h1>
          <p className="text-aura-gray text-sm max-w-md leading-relaxed">
            Browse our complete selection of curated luxury goods.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-16 border-b border-aura-charcoal pb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`text-xs tracking-luxury uppercase px-4 py-2 transition-colors duration-300 ${
              activeCategory === 'all'
                ? 'text-aura-gold bg-aura-gold/10'
                : 'text-aura-gray hover:text-aura-ivory'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`text-xs tracking-luxury uppercase px-4 py-2 transition-colors duration-300 ${
                activeCategory === cat.slug
                  ? 'text-aura-gold bg-aura-gold/10'
                  : 'text-aura-gray hover:text-aura-ivory'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-aura-gray text-sm">No products found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
