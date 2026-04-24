# AURA — Luxury Immersive Ecommerce

## Project Overview
A premium digital showroom built with Next.js, Three.js, and GSAP. 
Features real-time 3D product visualization, smooth scroll animations, 
custom cursor interactions, and a complete shopping cart system.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js, React Three Fiber, Drei
- **Animation:** GSAP (ScrollTrigger), Framer Motion
- **State:** Zustand
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## How to Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Folder Structure
```
/app                 # Next.js app router pages
  /page.tsx          # Homepage
  /collection/page.tsx
  /product/[slug]/page.tsx
  /about/page.tsx
  /layout.tsx
  /globals.css
/components
  /3d                # Three.js scenes and models
    Scene.tsx
    Showroom.tsx
    ProductModel.tsx
    WatchModel.tsx
    ShoeModel.tsx
    ClothingModel.tsx
    CologneModel.tsx
    ElectronicsModel.tsx
  /ui                # Interface components
    Loader.tsx
    Navbar.tsx
    Footer.tsx
    CustomCursor.tsx
    CartDrawer.tsx
    ProductCard.tsx
    CategoryNav.tsx
    FeaturedSection.tsx
    ParallaxSection.tsx
    ProductDetail.tsx
/lib
  store.ts           # Zustand cart store
  animations.ts      # GSAP utilities
  data.ts            # Product catalog
  utils.ts           # Helpers
/design-tokens.ts    # Design system constants
```

## 3D Model Notes
Current implementation uses procedural Three.js geometries styled to represent 
each category. To use real GLTF models:

1. Place `.glb` files in `/public/models/`
2. In the respective model component, replace the procedural group with:
   ```tsx
   import { useGLTF } from '@react-three/drei'
   const { scene } = useGLTF('/models/watch.glb')
   return <primitive object={scene} scale={1.5} />
   ```
3. Ensure models are optimized (Draco compression recommended).
4. Update the fallback UI in `ProductModel.tsx` to match.

## Animation System
- **GSAP ScrollTrigger:** Used for section reveals, parallax, and scroll-driven effects.
- **Framer Motion:** Used for UI micro-interactions, page transitions, and hover states.
- **R3F useFrame:** Used for continuous 3D animations (idle rotation, float).
- **Lenis:** Provides smooth scroll interpolation (lerp: 0.1).

## Scroll-Controlled Watch Film
The signature watch interaction lives in:

```
/lib/watch-product.ts
/lib/watch-animation.ts
/lib/frame-sequence.ts
/components/watch/WatchTile.tsx
/components/watch/WatchDetailExperience.tsx
/components/watch/ScrollImageSequence.tsx
/components/watch/ProductDescriptionTimeline.tsx
/app/watch/[slug]/page.tsx
```

The homepage renders `WatchTile`, which opens `/watch/iced-roman-diamond-watch` with a short overlay transition. The detail route uses a sticky split layout: copy on the left, image-sequence canvas on the right.

`ScrollImageSequence` preloads ordered PNG frames from `/public/media/watch-sequence/`, renders them to a high-DPI canvas, and listens to GSAP `ScrollTrigger` progress. Scroll progress sets a target frame, `requestAnimationFrame` eases the current frame toward it, and scroll idle snaps to clean keyframes. This keeps the product film responsive while scrolling and prevents the watch from stopping on awkward in-between frames.

Expected media paths:

```
/public/media/iced-roman-watch-tile.jpeg
/public/media/watch-sequence/ezgif-frame-001.png
/public/media/watch-sequence/ezgif-frame-002.png
...
```

The watch tile/poster image is copied from `store/media/image/Render_only_the_202604241302.jpeg` into `/public/media/iced-roman-watch-tile.jpeg` so both the Next app and the static fallback can serve it.
The frame sequence is copied from `store/media/ezgif-63bf6f2cd4d28a68-png-split`.

## Performance Notes
- Only one active R3F canvas per viewport section.
- 3D models use `drei/Html` fallback for SSR.
- Images are lazy-loaded with `next/image`.
- Cart state is persisted to `localStorage`.
- Reduced motion media query respected globally.
- Touch devices use simplified 3D (static with subtle parallax).
