# Atelier Archive

A premium luxury shopping storefront for curated watches, fashion, shoes, fragrances, accessories, and exclusive bundles.

## Primary Entry
- Open [index.html](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/index.html) directly.
- Additional pages:
[collections.html](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/collections.html),
[product.html](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/product.html),
[cart.html](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/cart.html),
[about.html](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/about.html)
- The static storefront lives in the actual git repo root so GitHub Pages can publish it.
- Real images should go in `assets/images/`. The site is already wired to use those files and falls back to neutral placeholders until you add them.

## Stack Used
- Plain HTML
- CSS
- Vanilla JavaScript
- Local SVG artwork assets
- Google Fonts for typography
- Existing Next.js / React / TypeScript (`.tsx`) source remains in `app/`, `components/`, and `lib/`, but browsers load the static HTML/CSS/JS storefront directly.

## How To Run Locally
- Open `index.html` directly in the browser.
- Or serve the folder if you want local links under `http://` instead of `file://`.

## Folder Structure
```text
assets/
  app.js
  styles.css
  images/
  placeholders/
  media/
404/
  index.html
404.html
about.html
cart.html
collections.html
index.html
product.html
memory.md
README.md
```

## Design System Summary
- Typography: `Cormorant Garamond` for editorial display and `Manrope` for body/UI text.
- Palette: warm ivory backgrounds, charcoal ink text, translucent white surfaces, muted champagne accent.
- Layout: large section spacing, image-first hierarchy, restrained surfaces, minimal visual noise.

## Animation System Summary
- First-load luxury intro overlay shown once per session.
- Scroll reveal system for major sections and cards.
- Subtle tilt interaction for hero/product media.
- Minimal parallax in feature areas only.
- Tasteful custom cursor on fine-pointer devices.

## Page Overview
- `index.html`: hero, curated categories, featured products, signature editorial section, trust messaging.
- `collections.html`: searchable/filterable archive browse.
- `product.html`: dynamic product detail page driven by query string data.
- `cart.html`: local-storage bag review and quantity editing.
- `about.html`: brand point of view and trust messaging.
- `404.html` and `404/index.html`: static not-found pages for direct hosting and folder-based hosting.

## Notes On Performance And Accessibility
- Motion is restrained and reduced automatically for users with reduced-motion preferences.
- Cursor enhancement only runs on fine-pointer devices.
- Layouts keep contrast high, buttons obvious, and product browsing clear.

## Additional Notes
- [memory.md](C:/Users/junha_au6a0kj/Documents/GitHub/store-main/store/memory.md) remains the visual and UX source of truth.
