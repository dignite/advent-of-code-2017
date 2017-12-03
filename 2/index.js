import { reduce, sumBy, identity } from 'lodash/fp'

export default function algorithm (input) {
  return sumNumbers(parseIntoMatrixOfNumbers(input).map(getBiggestDifference))
}

function sumNumbers (numbers) {
  return sumBy(identity)(numbers)
}

function parseIntoMatrixOfNumbers (rawMatrix) {
  return splitIntoRows(rawMatrix).map(row => splitIntoColumns(row).map(toInteger))
}

function getBiggestDifference (numbers) {
  return max(numbers) - min(numbers)
}

function splitIntoRows (matrix) {
  return matrix.split('\n')
}

function splitIntoColumns (row) {
  return row.trimLeft().split(' ')
}

function toInteger (value) {
  return parseInt(value, 10)
}

function max (numbers) {
  return reduce((prev, current) => current > prev ? current : prev)(-Infinity)(numbers)
}

function min (numbers) {
  return reduce((prev, current) => current < prev ? current : prev)(Infinity)(numbers)
}