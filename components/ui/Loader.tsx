'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    let completeTimeout: ReturnType<typeof setTimeout>

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setComplete(true)
          completeTimeout = setTimeout(onComplete, 1300)
          return 100
        }
        return Math.min(100, prev + Math.random() * 15)
      })
    }, 200)

    return () => {
      clearInterval(interval)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-aura-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: complete ? 0.92 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            top: complete ? '2.1rem' : '50%',
            left: complete ? 'clamp(1.5rem, 4vw, 3rem)' : '50%',
            x: complete ? 0 : '-50%',
            y: complete ? 0 : '-50%',
          }}
          transition={{
            duration: complete ? 1.05 : 0.8,
            delay: complete ? 0.1 : 0.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed text-center"
        >
          <motion.h1
            className="text-aura-ivory font-light uppercase"
            animate={{
              fontSize: complete ? '0.8rem' : 'clamp(2.25rem, 6vw, 3.75rem)',
              lineHeight: '1',
              letterSpacing: complete ? '0.36em' : '0.2em',
              marginBottom: complete ? '0rem' : '2rem',
            }}
            transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
          >
            Aura
          </motion.h1>
          <motion.div
            className="w-48 h-[1px] bg-aura-charcoal relative overflow-hidden"
            animate={{ opacity: complete ? 0 : 1, y: complete ? 14 : 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-aura-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.p
            className="text-aura-gray text-xs tracking-luxury uppercase mt-6"
            animate={{ opacity: complete ? 0 : 1, y: complete ? 10 : 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
