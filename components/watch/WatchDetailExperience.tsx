'use client'

import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ProductDescriptionTimeline from '@/components/watch/ProductDescriptionTimeline'
import ScrollControlledVideo from '@/components/watch/ScrollControlledVideo'
import { WatchStoryProduct } from '@/lib/watch-product'

interface WatchDetailExperienceProps {
  product: WatchStoryProduct
}

export default function WatchDetailExperience({ product }: WatchDetailExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStage, setActiveStage] = useState(0)

  const handleStageChange = useCallback((stage: number) => {
    setActiveStage(stage)
  }, [])

  return (
    <div className="min-h-screen bg-aura-black text-aura-ivory">
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
        className="pointer-events-none fixed inset-0 z-[80] bg-aura-ivory"
      />

      <section ref={sectionRef} className="relative min-h-[430vh] bg-[#050505]">
        <div className="sticky top-0 min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(201,176,55,0.17),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.045),transparent_32%,rgba(201,176,55,0.08)_78%,transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.94)_37%,rgba(5,5,5,0.2)_100%)]" />

          <div className="relative z-10 grid min-h-screen grid-cols-1 px-6 pb-14 pt-24 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-12 lg:pb-10">
            <div className="relative z-20">
              <Link
                href="/"
                data-cursor="Back"
                className="mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-aura-gray transition duration-500 hover:text-aura-gold [font-family:var(--font-brand)]"
              >
                <ArrowLeft size={14} strokeWidth={1.4} />
                Back to showroom
              </Link>

              <ProductDescriptionTimeline product={product} activeStage={activeStage} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.28 }}
              className="relative z-10 flex min-h-[54vh] items-center lg:min-h-0"
            >
              <div className="h-[58vh] w-full lg:h-[82vh]">
                <ScrollControlledVideo
                  src={product.videoSrc}
                  poster={product.posterSrc}
                  triggerRef={sectionRef}
                  snapPoints={product.snapPoints}
                  onStageChange={handleStageChange}
                />
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-aura-ivory/45 [font-family:var(--font-brand)] lg:flex">
            <span className="h-px w-16 bg-aura-ivory/20" />
            Scroll to control the watch film
            <span className="h-px w-16 bg-aura-ivory/20" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1200px] border-t border-aura-ivory/10 pt-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-aura-gold [font-family:var(--font-brand)]">
            Private Client Service
          </p>
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="text-3xl uppercase leading-tight tracking-[0.08em] text-aura-ivory [font-family:var(--font-display)] md:text-5xl">
              Availability is handled through a private request.
            </h2>
            <p className="text-lg leading-8 text-aura-gray">
              Our advisors confirm sourcing, condition, and delivery windows before any purchase commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
