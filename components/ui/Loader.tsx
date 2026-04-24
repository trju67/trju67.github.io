'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-aura-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-aura-ivory text-4xl md:text-6xl font-light tracking-[0.2em] uppercase mb-8">
              Aura
            </h1>
            <div className="w-48 h-[1px] bg-aura-charcoal relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-aura-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-aura-gray text-xs tracking-luxury uppercase mt-6">
              Loading Experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
