export const clampProgress = (value: number) => Math.min(1, Math.max(0, value))

export const getDirectionalSnap = (
  progress: number,
  direction: 1 | -1,
  snapPoints: number[]
) => {
  const clamped = clampProgress(progress)

  if (direction > 0) {
    return snapPoints.find((point) => point >= clamped + 0.01) ?? snapPoints[snapPoints.length - 1]
  }

  return [...snapPoints].reverse().find((point) => point <= clamped - 0.01) ?? snapPoints[0]
}

export const getSnapIndex = (target: number, snapPoints: number[]) => {
  const index = snapPoints.findIndex((point) => Math.abs(point - target) < 0.001)
  return index >= 0 ? index : 0
}

export const approachProgress = (current: number, target: number) => {
  const delta = target - current
  const distance = Math.abs(delta)

  if (distance < 0.0008) {
    return target
  }

  const step = Math.max(distance * 0.09, 0.002)
  return current + Math.sign(delta) * Math.min(distance, step)
}
