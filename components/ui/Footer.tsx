import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-aura-black border-t border-aura-charcoal py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="text-aura-ivory text-2xl tracking-[0.3em] uppercase font-light">
            Aura
          </Link>
          <p className="text-aura-gray text-sm mt-6 max-w-sm leading-relaxed">
            A digital showroom for the discerning. We curate objects that improve with time, 
            not against it.
          </p>
        </div>

        <div>
          <h4 className="text-aura-ivory text-xs tracking-luxury uppercase mb-6">Navigate</h4>
          <ul className="space-y-4">
            {['Collection', 'House', 'Care', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-aura-gray text-sm hover:text-aura-gold transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-aura-ivory text-xs tracking-luxury uppercase mb-6">Service</h4>
          <ul className="space-y-4">
            {['Shipping', 'Returns', 'Authenticity', 'Repairs'].map((item) => (
              <li key={item}>
                <span className="text-aura-gray text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-16 pt-8 border-t border-aura-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-aura-gray text-xs">© 2024 Aura. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="text-aura-gray text-xs hover:text-aura-ivory transition-colors cursor-pointer">Privacy</span>
          <span className="text-aura-gray text-xs hover:text-aura-ivory transition-colors cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  )
}
