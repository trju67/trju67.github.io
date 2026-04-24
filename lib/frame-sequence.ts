export interface FrameSequenceConfig {
  frames: string[]
  snapFrames: number[]
}

const numericChunk = /(\d+)/

export const sortFramePaths = (frames: string[]) => {
  return [...frames].sort((a, b) => {
    const aNumber = Number(a.match(numericChunk)?.[1] ?? 0)
    const bNumber = Number(b.match(numericChunk)?.[1] ?? 0)
    return aNumber - bNumber || a.localeCompare(b)
  })
}

export const createWatchFrameSequence = (): FrameSequenceConfig => {
  const frames = sortFramePaths(
    Array.from({ length: 8 }, (_, index) => {
      const frameNumber = String(index + 1).padStart(3, '0')
      return `/media/watch-sequence/ezgif-frame-${frameNumber}.png`
    })
  )

  return {
    frames,
    snapFrames: [0, 2, 5, frames.length - 1],
  }
}

export const getNearestSnapFrame = (frame: number, snapFrames: number[]) => {
  return snapFrames.reduce((nearest, snapFrame) => {
    return Math.abs(snapFrame - frame) < Math.abs(nearest - frame) ? snapFrame : nearest
  }, snapFrames[0])
}

export const getDirectionalSnapFrame = (
  frame: number,
  direction: 1 | -1,
  snapFrames: number[]
) => {
  if (direction > 0) {
    return snapFrames.find((snapFrame) => snapFrame >= frame + 0.35) ?? snapFrames[snapFrames.length - 1]
  }

  return [...snapFrames].reverse().find((snapFrame) => snapFrame <= frame - 0.35) ?? snapFrames[0]
}
