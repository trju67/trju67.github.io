'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from '@/lib/store'
import { Menu, X, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [transitionHref, setTransitionHref] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { toggleCart, totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!transitionHref) return

    const timeout = window.setTimeout(() => {
      if (pathname === transitionHref) {
        setTransitionHref(null)
      }
    }, 1500)

    return () => window.clearTimeout(timeout)
  }, [pathname, transitionHref])

  const navLinks = [
    { href: '/collection', label: 'Collection' },
    { href: '/about', label: 'House' },
  ]

  const navigateSmoothly = (href: string) => {
    if (href === pathname || transitionHref) return

    setMenuOpen(false)
    setTransitionHref(href)

    window.setTimeout(() => {
      router.push(href)
    }, 900)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-aura-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-aura-ivory text-[0.8rem] leading-none tracking-[0.36em] uppercase font-normal [font-family:var(--font-brand)]"
          >
            Aura
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateSmoothly(link.href)}
                className="text-aura-ivory/70 text-xs tracking-luxury uppercase hover:text-aura-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleCart}
              className="relative text-aura-ivory hover:text-aura-gold transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems() > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-aura-gold text-aura-black text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems()}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-aura-ivory"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-aura-black flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => navigateSmoothly(link.href)}
                  className="text-aura-ivory text-2xl tracking-luxury uppercase"
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {transitionHref && (
          <motion.div
            className="fixed inset-0 z-[90] bg-aura-black"
            initial={{ y: '105%', opacity: 1 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-105%', opacity: 0 }}
            transition={{
              duration: 1.12,
              ease: [0.76, 0, 0.24, 1],
              delay: transitionHref === pathname ? 1.5 : 0,
            }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="mb-5 text-[10px] uppercase tracking-[0.36em] text-aura-gold [font-family:var(--font-brand)]">
                  Opening
                </p>
                <p className="text-3xl uppercase tracking-[0.28em] text-aura-ivory [font-family:var(--font-brand)]">
                  {navLinks.find((link) => link.href === transitionHref)?.label}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
