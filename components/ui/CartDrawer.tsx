'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import { X, Plus, Minus, Trash2 } from 'lucide-react'

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-aura-charcoal z-[70] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="p-6 border-b border-aura-surface flex items-center justify-between">
              <h2 className="text-aura-ivory text-sm tracking-luxury uppercase">Your Bag</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-aura-gray hover:text-aura-ivory transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-aura-gray">
                  <p className="text-sm tracking-wide">Your bag is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    layout
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-aura-surface relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-aura-charcoal to-aura-surface" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-aura-ivory text-sm font-medium">{item.product.name}</h3>
                          <p className="text-aura-gray text-xs mt-1">{item.product.category}</p>
                          {item.size && <p className="text-aura-gray text-xs">Size: {item.size}</p>}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-aura-gray hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 border border-aura-surface px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-aura-gray hover:text-aura-ivory"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-aura-ivory text-xs w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-aura-gray hover:text-aura-ivory"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-aura-ivory text-sm">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-aura-surface space-y-4">
                <div className="flex justify-between text-aura-ivory">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm font-medium">{formatPrice(totalPrice())}</span>
                </div>
                <button className="w-full bg-aura-ivory text-aura-black py-4 text-xs tracking-luxury uppercase font-medium hover:bg-aura-gold transition-colors duration-300">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
