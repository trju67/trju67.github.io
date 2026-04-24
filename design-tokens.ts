export const tokens = {
  colors: {
    background: '#0a0a0a',
    backgroundElevated: '#141414',
    surface: '#1a1a1a',
    textPrimary: '#f5f5f0',
    textSecondary: '#a3a3a3',
    accent: '#c9b037',
    accentLight: '#e5d48b',
  },
  typography: {
    hero: 'clamp(3rem, 8vw, 7.5rem)',
    h1: 'clamp(2rem, 4vw, 3.5rem)',
    h2: 'clamp(1.5rem, 3vw, 2.5rem)',
    body: '1rem',
    label: '0.75rem',
  },
  spacing: {
    section: 'clamp(6rem, 12vh, 10rem)',
    content: 'clamp(1rem, 4vw, 4rem)',
  },
  animation: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.2,
    },
    easing: [0.25, 1, 0.5, 1],
    stagger: 0.08,
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  }
} as const
