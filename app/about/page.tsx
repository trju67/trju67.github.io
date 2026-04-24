'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/ui/Footer'
import ParallaxSection from '@/components/ui/ParallaxSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-aura-black">
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-aura-gold text-xs tracking-luxury uppercase mb-6">The House</p>
          <h1 className="text-aura-ivory text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-12">
            We believe in<br />
            <span className="text-aura-gray">permanence over novelty.</span>
          </h1>

          <div className="space-y-8 text-aura-gray text-sm md:text-base leading-relaxed">
            <p>
              AURA was founded on a simple conviction: that the objects we surround ourselves with 
              should improve with time, not deteriorate. In an age of disposable consumption, we 
              curate pieces that defy obsolescence.
            </p>
            <p>
              Every item in our showroom is selected through a rigorous process of evaluation. 
              We consider material integrity, craftsmanship heritage, design longevity, and the 
              intention behind the object. We do not follow trends. We follow standards.
            </p>
            <p>
              Our digital showroom exists to extend the experience of discovery beyond physical 
              boundaries. The 3D environments you explore are designed to reveal the spatial 
              presence of each piece—the way light interacts with surface, the weight implied 
              by form, the confidence of proportion.
            </p>
          </div>
        </motion.div>
      </div>

      <ParallaxSection />

      <div className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { 
              title: 'Authentication', 
              desc: 'Every piece undergoes multi-point verification by our specialists. Certificates of authenticity accompany all high-value acquisitions.' 
            },
            { 
              title: 'White Glove Service', 
              desc: 'From inquiry to unboxing, our client advisors provide discreet, knowledgeable guidance. No chatbots. No scripts.' 
            },
            { 
              title: 'Lifetime Relationship', 
              desc: 'We service what we sell. Repairs, restoration, and resale assistance are available for life on all qualifying purchases.' 
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-aura-ivory text-lg font-medium mb-4">{item.title}</h3>
              <p className="text-aura-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
