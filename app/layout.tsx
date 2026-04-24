import type { Metadata } from 'next'
import { Inter, Michroma, Orbitron, Rajdhani, Syncopate } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import CartDrawer from '@/components/ui/CartDrawer'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-inter' })
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-rajdhani' })
const syncopate = Syncopate({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-syncopate' })
const michroma = Michroma({ subsets: ['latin'], weight: ['400'], variable: '--font-michroma' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'AURA — Luxury Digital Showroom',
  description: 'An immersive luxury shopping experience. Watches, shoes, clothing, and objects of desire.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${inter.variable} ${rajdhani.variable} ${syncopate.variable} ${michroma.variable} ${orbitron.variable}`}>
        <CustomCursor />
        <Navbar />
        <CartDrawer />
        <main>{children}</main>
      </body>
    </html>
  )
}
