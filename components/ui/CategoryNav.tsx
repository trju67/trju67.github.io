'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { categories } from '@/lib/data'

export default function CategoryNav() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-aura-black">
      <div className="max-w-[1800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-aura-ivory text-3xl md:text-5xl font-light mb-16 tracking-tight"
        >
          Browse by Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
            >
              <Link
                href={`/collection?category=${cat.slug}`}
                data-cursor="Explore"
                className="group block relative aspect-[3/4] bg-aura-charcoal overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-aura-gold/0 group-hover:bg-aura-gold/10 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-aura-ivory text-sm md:text-base font-medium group-hover:text-aura-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-aura-gray text-xs mt-1">{cat.count} Pieces</p>
                </div>

                <motion.div
                  className="absolute inset-0 border border-aura-gold/0 group-hover:border-aura-gold/30 transition-colors duration-500"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
