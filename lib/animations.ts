import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const initScrollAnimations = () => {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.5')
    gsap.to(el, {
      y: () => window.innerHeight * speed * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  })

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((container) => {
    const children = container.children
    gsap.fromTo(
      children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        },
      }
    )
  })
}

export const animatePageTransition = (callback: () => void) => {
  const tl = gsap.timeline()
  tl.to('.page-transition', {
    yPercent: 0,
    duration: 0.6,
    ease: 'power3.inOut',
    onComplete: callback,
  }).to('.page-transition', {
    yPercent: -100,
    duration: 0.6,
    ease: 'power3.inOut',
    delay: 0.2,
  })
}

export const floatAnimation = (mesh: any, time: number) => {
  if (!mesh) return
  mesh.position.y = Math.sin(time * 0.5) * 0.1
  mesh.rotation.y = Math.sin(time * 0.2) * 0.05
}
