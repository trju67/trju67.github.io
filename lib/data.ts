export interface Product {
  id: string
  slug: string
  name: string
  category: 'watches' | 'shoes' | 'clothes' | 'cologne' | 'electronics' | 'accessories'
  price: number
  description: string
  details: string[]
  image: string
  modelType: 'watch' | 'shoe' | 'clothing' | 'cologne' | 'electronics' | 'accessories'
  variants?: { name: string; value: string }[]
  sizes?: string[]
  isNew?: boolean
  isFeatured?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'chronos-heritage',
    name: 'Chronos Heritage',
    category: 'watches',
    price: 12500,
    description: 'A testament to timeless craftsmanship. The Chronos Heritage features a hand-wound mechanical movement, 18k gold case, and sapphire crystal exhibition caseback.',
    details: ['18k Yellow Gold Case', 'Hand-Wound Caliber CH-001', 'Sapphire Crystal', 'Alligator Leather Strap', 'Water Resistant 50m'],
    image: '/products/watch-1.jpg',
    modelType: 'watch',
    isFeatured: true,
    isNew: true,
  },
  {
    id: '2',
    slug: 'velox-runner',
    name: 'Velox Runner',
    category: 'shoes',
    price: 890,
    description: 'Italian calfskin meets modern silhouette. Hand-stitched with a lightweight sole engineered for the discerning urbanite.',
    details: ['Italian Calfskin Upper', 'Hand-Stitched Construction', 'Memory Foam Insole', 'Rubber Outsole', 'Made in Italy'],
    image: '/products/shoe-1.jpg',
    modelType: 'shoe',
    sizes: ['40', '41', '42', '43', '44', '45'],
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'noir-overcoat',
    name: 'Noir Overcoat',
    category: 'clothes',
    price: 3200,
    description: 'Double-faced cashmere in a silhouette that commands attention. Cut for movement, designed for permanence.',
    details: ['100% Cashmere', 'Double-Faced Construction', 'Horn Buttons', 'Unlined Interior', 'Tailored Fit'],
    image: '/products/clothing-1.jpg',
    modelType: 'clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'essence-noir',
    name: 'Essence Noir',
    category: 'cologne',
    price: 450,
    description: 'Oud, black amber, and smoked vetiver. A fragrance that lingers in memory long after departure.',
    details: ['Eau de Parfum 100ml', 'Top: Bergamot, Pink Pepper', 'Heart: Oud, Rose', 'Base: Amber, Vetiver', 'Hand-Blown Bottle'],
    image: '/products/cologne-1.jpg',
    modelType: 'cologne',
    variants: [{ name: 'Size', value: '100ml' }],
    isNew: true,
  },
  {
    id: '5',
    slug: 'aura-phone',
    name: 'Aura Phone',
    category: 'electronics',
    price: 2499,
    description: 'Titanium frame, ceramic back, no cameras visible. Technology that disappears into craft.',
    details: ['Grade 5 Titanium', 'Ceramic Back Panel', 'OLED Display', '48HR Battery', 'Silent Switch'],
    image: '/products/electronics-1.jpg',
    modelType: 'electronics',
    isFeatured: true,
  },
  {
    id: '6',
    slug: 'gold-link-bracelet',
    name: 'Gold Link Bracelet',
    category: 'accessories',
    price: 1800,
    description: 'Interlocking 18k gold links with a hidden clasp. Minimal, weighty, permanent.',
    details: ['18k Solid Gold', 'Hidden Clasp Mechanism', 'Hand-Polished', 'Adjustable Length', 'Certificate Included'],
    image: '/products/accessory-1.jpg',
    modelType: 'accessories',
    isNew: true,
  },
  {
    id: '7',
    slug: 'diver-pro',
    name: 'Diver Pro',
    category: 'watches',
    price: 8900,
    description: 'Professional-grade diving watch with helium escape valve and ceramic bezel.',
    details: ['Ceramic Bezel', 'Helium Escape Valve', '300m Water Resistance', 'Automatic Movement', 'Rubber Strap'],
    image: '/products/watch-2.jpg',
    modelType: 'watch',
  },
  {
    id: '8',
    slug: 'suede-loafer',
    name: 'Suede Loafer',
    category: 'shoes',
    price: 650,
    description: 'Unlined suede construction that molds to your foot over time. The ultimate casual luxury.',
    details: ['Unlined Suede', 'Leather Sole', 'Hand-Sewn Apron', 'Cushioned Heel', 'Made in Portugal'],
    image: '/products/shoe-2.jpg',
    modelType: 'shoe',
    sizes: ['40', '41', '42', '43', '44'],
  },
]

export const categories = [
  { name: 'Watches', slug: 'watches', count: 12 },
  { name: 'Shoes', slug: 'shoes', count: 18 },
  { name: 'Clothes', slug: 'clothes', count: 24 },
  { name: 'Cologne', slug: 'cologne', count: 8 },
  { name: 'Electronics', slug: 'electronics', count: 6 },
  { name: 'Accessories', slug: 'accessories', count: 15 },
] as const
