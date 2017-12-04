import { reduce, range } from 'lodash/fp'

export default function algorithm (position) {
  const ring = getRing(position)
  const distanceToMiddle = getDistanceToMiddle(position, ring)
  return position === 1 ? 0: ring + distanceToMiddle
}

export function getRing (position) {
  return getRingRecursion(position, 0)
}

function getRingRecursion (position, currentRing) {
  return getHighestRingPosition(currentRing) >= position
    ? currentRing
    : getRingRecursion(position, currentRing + 1)
}

function getDistanceToMiddle (position, ring) {
  const highestPreviousRingPosition = getHighestRingPosition(ring - 1)
  const relativeMiddleOfRightSide = ring
  const relativePosition = position - highestPreviousRingPosition
  const normalizedRelativePosition = relativePosition % (getRingWidth(ring) - 1)
  return Math.abs(relativeMiddleOfRightSide - normalizedRelativePosition)
}

function getHighestRingPosition (ring) {
  const ringWidth = getRingWidth(ring)
  return ringWidth * ringWidth
}

function getRingWidth (ring) {
  return ring * 2 + 1
}
