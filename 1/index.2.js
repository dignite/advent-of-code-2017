import { chunk, zipWith, sum } from 'lodash/fp'

export default function algorithm (numbers) {
  const parsed = numbers.split('').map(numberString => parseInt(numberString, 10))
  const halved = chunk(parsed.length / 2)(parsed)
  const duplicationValues = zipWith((a, b) => a === b ? 2 * a : 0)(halved[0])(halved[1])
  return sum(duplicationValues)
}