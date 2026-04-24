# AURA — Memory & Design System

## Product Vision
AURA is a luxury immersive ecommerce experience that transcends traditional online shopping. 
It is a digital showroom where products exist in spatial, interactive environments. 
The 3D experience should enhance discovery, not obstruct purchase intent.

## Design Rules
- Minimal surface area. No clutter. No boxes around boxes.
- Editorial typography with generous whitespace.
- Every pixel must feel intentional and expensive.
- Use asymmetry and scale to create visual hierarchy.
- Never use generic ecommerce grids. Products breathe.

## UX Rules
- The user must always know how to add to cart within 2 seconds of seeing a product.
- 3D effects must never block interaction or hide CTAs.
- Navigation is always accessible.
- Cart state is persistent and obvious.
- Mobile experience degrades gracefully (3D becomes static hero imagery).
- Loading states must feel premium, never frustrating.

## UI Rules
- No borders on cards unless absolutely necessary.
- Buttons are either pill-shaped or minimal text with underline animation.
- Images and 3D canvases edge-to-edge where possible.
- Maximum 6 products per row on desktop, 2 on mobile.
- Use large typography for section headers (min 48px desktop).
- Never use neon, bright primary colors, or gradients that feel tech-startup.

## Animation Rules
- All motion should feel physical and weighted.
- Easing: primarily `cubic-bezier(0.25, 1, 0.5, 1)` for entrances.
- Stagger children by 0.05s–0.1s.
- No motion longer than 1.2s for UI elements.
- 3D motion should be subtle: slow rotation, gentle float, cursor parallax.
- Respect `prefers-reduced-motion`.

## Signature Watch Scroll-Film Pattern
- Premium product storytelling can use a sticky split layout: left side for copy and CTAs, right side for dominant product film.
- Prefer canvas-rendered image sequences for precise product-film control when frame exports are available.
- Scroll-controlled image sequences must preload frames, draw into a high-DPI canvas, and ease `currentFrame` toward `targetFrame` inside `requestAnimationFrame`.
- Use clean snap frames for segment ends. When the user stops scrolling, the animation should continue easing to the nearest intended keyframe rather than freezing halfway.
- Stage text should update from the selected snap target and animate with a calm fade/blur reveal.
- Keep the watch visual dominant, dark, and uncluttered. Text should support the film, not compete with it.
- Media path convention: `/public/media/{product-slug}-tile.*` and `/public/media/watch-sequence/{ordered-frame-name}.png`.

## 3D Interaction Rules
- Models rotate slowly on idle (0.002–0.005 rad/frame).
- Drag to rotate manually on product detail pages.
- Cursor movement creates subtle parallax (max 15px offset).
- Models reset smoothly to default position on mouse leave.
- Use soft studio lighting (ambient + directional + point).
- Shadows are soft and contact-only where possible.
- Always provide a fallback image if WebGL fails.

## Cursor Rules
- Default: small solid circle (8px), blend-mode: difference.
- Over products: expands to 48px with "View" label.
- Over buttons: expands to 40px with "Explore" or "Add" label.
- Transition: 0.3s cubic-bezier.
- Hide default cursor globally.
- On mobile/touch: disable custom cursor entirely.

## Color Palette
- Background Primary: `#0a0a0a` (Rich Black)
- Background Secondary: `#141414` (Charcoal)
- Surface: `#1a1a1a` (Elevated)
- Text Primary: `#f5f5f0` (Ivory)
- Text Secondary: `#a3a3a3` (Warm Gray)
- Accent: `#c9b037` (Champagne Gold)
- Accent Hover: `#e5d48b` (Light Gold)
- Error: `#ff4444` (subtle, used sparingly)

## Typography Rules
- Headings: `font-family: 'Inter', sans-serif` or system geometric sans.
- Weights: 300 (Light), 400 (Regular), 500 (Medium).
- Hero text: 72px–120px, weight 300, tight line-height (1.0–1.1).
- Body: 16px, weight 400, line-height 1.6.
- Labels/Nav: 12px, weight 500, letter-spacing 0.1em, uppercase.
- Never use more than 2 font families.

## Things to Avoid
- Neon colors, bright blues, purples, or greens.
- Box shadows that look like Material Design.
- Generic Bootstrap/Tailwind card components.
- Auto-playing sound.
- Scroll hijacking that breaks native behavior.
- More than one 3D canvas visible simultaneously (performance).
- Cluttered navigation (max 5 top-level items).
- Fake 3D using CSS transforms only.
- Loading spinners that look like system defaults.
- Popups or intrusive modals.
