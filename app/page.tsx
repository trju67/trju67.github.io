'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Loader from '@/components/ui/Loader'
import CategoryNav from '@/components/ui/CategoryNav'
import FeaturedSection from '@/components/ui/FeaturedSection'
import ParallaxSection from '@/components/ui/ParallaxSection'
import Footer from '@/components/ui/Footer'
import { products } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'
import WatchTile from '@/components/watch/WatchTile'
import { icedRomanDiamondWatch } from '@/lib/watch-product'

const Scene = dynamic(() => import('@/components/3d/Scene'), { ssr: false })
const Showroom = dynamic(() => import('@/components/3d/Showroom'), { ssr: false })

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState('watches')
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const newArrivals = products.filter((p) => p.isNew)

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <section ref={heroRef} className="relative h-screen overflow-hidden bg-aura-black">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <Scene className="w-full h-full">
              <Showroom activeCategory={activeCategory} />
            </Scene>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-aura-black via-aura-black/20 to-transparent z-10" />

          <motion.div 
            className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12"
            style={{ y: textY }}
          >
            <div className="max-w-[1800px] mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-aura-gold text-xs tracking-[0.3em] uppercase mb-6"
              >
                Digital Showroom
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="text-aura-ivory text-5xl md:text-7xl lg:text-9xl font-light leading-[1.0] tracking-tight max-w-4xl"
              >
                Objects of<br />Permanence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-aura-gray text-sm md:text-base mt-8 max-w-md leading-relaxed"
              >
                Discover our curated collection of watches, footwear, and essentials 
                designed to outlast trends.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex gap-6 mt-12 overflow-x-auto pb-4 no-scrollbar"
              >
                {['watches', 'shoes', 'clothes', 'cologne', 'electronics'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs tracking-luxury uppercase whitespace-nowrap transition-colors duration-300 ${
                      activeCategory === cat 
                        ? 'text-aura-gold border-b border-aura-gold pb-1' 
                        : 'text-aura-gray hover:text-aura-ivory'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              <motion.a
                href="/watch/iced-roman-diamond-watch"
                data-cursor="Open"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.75, ease: [0.25, 1, 0.5, 1] }}
                className="mt-6 inline-flex items-center gap-4 rounded-full border border-aura-gold/30 bg-aura-gold/10 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-aura-gold transition duration-500 hover:border-aura-gold hover:bg-aura-gold hover:text-aura-black [font-family:var(--font-brand)]"
              >
                Open Iced Roman Watch
                <span className="h-px w-10 bg-current" />
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section className="bg-aura-black px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1800px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end"
            >
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-aura-gold [font-family:var(--font-brand)]">
                  Signature Interaction
                </p>
                <h2 className="text-3xl font-normal uppercase leading-tight tracking-[0.08em] text-aura-ivory [font-family:var(--font-display)] md:text-5xl">
                  Iced Roman watch film
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-aura-gray md:justify-self-end">
                Open the tile to enter a dedicated product story where scrolling drives the watch assembly film forward and backward.
              </p>
            </motion.div>

            <WatchTile product={icedRomanDiamondWatch} />
          </div>
        </section>

        <CategoryNav />
        <FeaturedSection />
        <ParallaxSection />

        <section className="py-24 md:py-32 px-6 md:px-12 bg-aura-black">
          <div className="max-w-[1800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <p className="text-aura-gold text-xs tracking-luxury uppercase mb-4">Just In</p>
              <h2 className="text-aura-ivory text-3xl md:text-5xl font-light tracking-tight">
                New Arrivals
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {newArrivals.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 md:px-12 bg-aura-charcoal border-t border-aura-surface">
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { title: 'Authenticated', desc: 'Every piece verified by our experts.' },
              { title: 'Global Shipping', desc: 'Complimentary white-glove delivery worldwide.' },
              { title: 'Lifetime Care', desc: 'Repairs and servicing for life.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <h3 className="text-aura-ivory text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-aura-gray text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </motion.div>
    </>
  )
}
