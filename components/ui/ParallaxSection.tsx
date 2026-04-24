'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen overflow-hidden bg-aura-black">
      <motion.div
        className="absolute inset-0 bg-aura-charcoal"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-aura-black via-transparent to-aura-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-aura-gold/5 blur-3xl" />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <p className="text-aura-gold text-xs tracking-[0.3em] uppercase mb-6">The Experience</p>
        <h2 className="text-aura-ivory text-4xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-4xl">
          Objects of desire,<br />
          <span className="text-aura-gray">crafted for permanence.</span>
        </h2>
        <p className="text-aura-gray text-sm md:text-base mt-8 max-w-md leading-relaxed">
          Every piece in our collection is selected for its ability to transcend trend. 
          This is not consumption. This is curation.
        </p>
      </motion.div>
    </section>
  )
}
