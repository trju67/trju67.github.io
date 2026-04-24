'use client'

import { RefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getDirectionalSnapFrame, getNearestSnapFrame } from '@/lib/frame-sequence'

gsap.registerPlugin(ScrollTrigger)

interface ScrollImageSequenceProps {
  frames: string[]
  snapFrames: number[]
  poster: string
  triggerRef: RefObject<HTMLElement>
  onStageChange: (stage: number) => void
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ScrollImageSequence({
  frames,
  snapFrames,
  poster,
  triggerRef,
  onStageChange,
}: ScrollImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const rafRef = useRef<number>()
  const idleTimerRef = useRef<number>()
  const resizeObserverRef = useRef<ResizeObserver>()
  const currentFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const lastRawFrameRef = useRef(0)
  const lastFrameTimeRef = useRef(0)
  const renderedFrameRef = useRef(-1)
  const activeStageRef = useRef(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoadedCount(0)
    setLoadFailed(false)
    imagesRef.current = []

    frames.forEach((src, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.onload = () => {
        if (cancelled) return
        imagesRef.current[index] = image
        setLoadedCount((count) => count + 1)
      }
      image.onerror = () => {
        if (cancelled) return
        setLoadFailed(true)
      }
      image.src = src
    })

    return () => {
      cancelled = true
    }
  }, [frames])

  useEffect(() => {
    const canvas = canvasRef.current
    const trigger = triggerRef.current

    if (!canvas || !trigger || loadedCount === 0) return

    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(rect.width * pixelRatio))
      canvas.height = Math.max(1, Math.round(rect.height * pixelRatio))
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      renderedFrameRef.current = -1
    }

    const drawFrame = (frame: number) => {
      const image = imagesRef.current[frame]
      if (!image) return

      const rect = canvas.getBoundingClientRect()
      const canvasWidth = rect.width
      const canvasHeight = rect.height
      const imageRatio = image.width / image.height
      const canvasRatio = canvasWidth / canvasHeight

      let drawWidth = canvasWidth
      let drawHeight = canvasHeight

      if (imageRatio > canvasRatio) {
        drawWidth = canvasWidth
        drawHeight = canvasWidth / imageRatio
      } else {
        drawHeight = canvasHeight
        drawWidth = canvasHeight * imageRatio
      }

      const x = (canvasWidth - drawWidth) / 2
      const y = (canvasHeight - drawHeight) / 2

      context.fillStyle = '#000'
      context.fillRect(0, 0, canvasWidth, canvasHeight)
      context.drawImage(image, x, y, drawWidth, drawHeight)
    }

    const updateStage = (frame: number) => {
      const stageIndex = snapFrames.reduce((nearestIndex, snapFrame, index) => {
        return Math.abs(snapFrame - frame) < Math.abs(snapFrames[nearestIndex] - frame)
          ? index
          : nearestIndex
      }, 0)

      if (stageIndex !== activeStageRef.current) {
        activeStageRef.current = stageIndex
        onStageChange(stageIndex)
      }
    }

    const totalFrames = frames.length
    const maxFrame = totalFrames - 1
    const reducedMotion = prefersReducedMotion()

    setCanvasSize()
    drawFrame(0)

    resizeObserverRef.current = new ResizeObserver(() => {
      setCanvasSize()
      drawFrame(Math.round(currentFrameRef.current))
    })
    resizeObserverRef.current.observe(canvas)

    const tick = (time: number) => {
      const deltaMs = lastFrameTimeRef.current ? time - lastFrameTimeRef.current : 16.67
      lastFrameTimeRef.current = time

      const delta = targetFrameRef.current - currentFrameRef.current
      if (Math.abs(delta) < 0.015) {
        currentFrameRef.current = targetFrameRef.current
      } else {
        const smoothing = reducedMotion ? 1 : 1 - Math.exp(-Math.min(48, Math.max(8, deltaMs)) / 130)
        currentFrameRef.current += delta * smoothing
      }

      const frame = Math.max(0, Math.min(maxFrame, Math.round(currentFrameRef.current)))
      if (frame !== renderedFrameRef.current) {
        renderedFrameRef.current = frame
        drawFrame(frame)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: false,
      onUpdate: (self) => {
        const rawFrame = self.progress * maxFrame
        const delta = rawFrame - lastRawFrameRef.current

        targetFrameRef.current = rawFrame
        updateStage(rawFrame)

        if (Math.abs(delta) > 0.02) {
          const direction: 1 | -1 = delta > 0 ? 1 : -1
          const directionalStop = getDirectionalSnapFrame(rawFrame, direction, snapFrames)

          if (idleTimerRef.current) {
            window.clearTimeout(idleTimerRef.current)
          }

          idleTimerRef.current = window.setTimeout(() => {
            targetFrameRef.current = getNearestSnapFrame(directionalStop, snapFrames)
            updateStage(targetFrameRef.current)
          }, 140)
        }

        lastRawFrameRef.current = rawFrame
      },
    })

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      scrollTrigger.kill()
      resizeObserverRef.current?.disconnect()
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [frames, loadedCount, onStageChange, snapFrames, triggerRef])

  const progress = frames.length ? Math.round((loadedCount / frames.length) * 100) : 0
  const ready = loadedCount >= frames.length && !loadFailed

  return (
    <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2rem] border border-aura-gold/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <canvas
        ref={canvasRef}
        aria-label="Scroll controlled watch animation"
        className={`relative z-10 h-full w-full transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {!ready && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/72 text-center backdrop-blur-sm">
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-aura-gold [font-family:var(--font-brand)]">
            {loadFailed ? 'Frame load issue' : 'Preparing watch sequence'}
          </p>
          <div className="h-px w-56 overflow-hidden rounded-full bg-aura-ivory/12">
            <div
              className="h-full bg-aura-gold transition-all duration-300"
              style={{ width: `${loadFailed ? 100 : progress}%` }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-aura-gray [font-family:var(--font-brand)]">
            {loadFailed ? 'Using fallback image' : `${progress}%`}
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-6 right-6 z-20 rounded-full border border-aura-ivory/15 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-aura-ivory/70 backdrop-blur">
        Scroll Controls Frames
      </div>
    </div>
  )
}
