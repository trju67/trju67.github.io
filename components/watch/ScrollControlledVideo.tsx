'use client'

import { RefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { approachProgress, getDirectionalSnap, getSnapIndex } from '@/lib/watch-animation'

gsap.registerPlugin(ScrollTrigger)

interface ScrollControlledVideoProps {
  src: string
  poster: string
  triggerRef: RefObject<HTMLElement>
  snapPoints: number[]
  onStageChange: (stage: number) => void
}

export default function ScrollControlledVideo({
  src,
  poster,
  triggerRef,
  snapPoints,
  onStageChange,
}: ScrollControlledVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>()
  const durationRef = useRef(0)
  const currentProgressRef = useRef(0)
  const targetProgressRef = useRef(0)
  const lastRawProgressRef = useRef(0)
  const stageRef = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    const trigger = triggerRef.current

    if (!video || !trigger) return

    const setStageFromTarget = (target: number) => {
      const nextStage = getSnapIndex(target, snapPoints)
      if (nextStage !== stageRef.current) {
        stageRef.current = nextStage
        onStageChange(nextStage)
      }
    }

    const syncVideoTime = () => {
      if (!durationRef.current || !Number.isFinite(durationRef.current)) return

      const nextTime = currentProgressRef.current * durationRef.current
      if (!Number.isFinite(nextTime)) return

      try {
        video.currentTime = nextTime
      } catch {
        // Some browsers briefly reject seeks while metadata is settling.
      }
    }

    const tick = () => {
      currentProgressRef.current = approachProgress(
        currentProgressRef.current,
        targetProgressRef.current
      )
      syncVideoTime()
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleMetadata = () => {
      durationRef.current = video.duration || 0
      currentProgressRef.current = 0
      targetProgressRef.current = 0
      syncVideoTime()
      ScrollTrigger.refresh()
    }

    video.addEventListener('loadedmetadata', handleMetadata)
    if (video.readyState >= 1) {
      handleMetadata()
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: false,
      onUpdate: (self) => {
        const rawProgress = self.progress
        const delta = rawProgress - lastRawProgressRef.current

        if (Math.abs(delta) > 0.003) {
          const direction: 1 | -1 = delta > 0 ? 1 : -1
          const target = getDirectionalSnap(rawProgress, direction, snapPoints)
          targetProgressRef.current = target
          setStageFromTarget(target)
        }

        lastRawProgressRef.current = rawProgress
      },
    })

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata)
      scrollTrigger.kill()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onStageChange, snapPoints, triggerRef])

  return (
    <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2rem] border border-aura-gold/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_55%_48%,transparent_0,transparent_38%,rgba(0,0,0,0.64)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/80 to-transparent" />

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        controls={false}
        className="h-full w-full object-contain object-center"
      />

      <div className="pointer-events-none absolute bottom-6 right-6 z-20 rounded-full border border-aura-ivory/15 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-aura-ivory/70 backdrop-blur">
        Scroll Controls Film
      </div>
    </div>
  )
}
