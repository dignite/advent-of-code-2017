import fp from 'lodash/fp'

export default function algorithm (numbers) {
  const parsed = numbers.split('').map(numberString => parseInt(numberString, 10))
  return fp.reduce(sumUpMatchingSequences)(getMatchingSequenceIdentity(parsed))(parsed).sum
}

function sumUpMatchingSequences (previous, currentNumber) {
  const matchesLastNumber = currentNumber === previous.previousNumber
  const addition = matchesLastNumber ? currentNumber : 0
  return {
    sum: previous.sum + addition,
    previousNumber: currentNumber
  }
}

function getMatchingSequenceIdentity (numbers) {
  return {
    sum: 0,
    previousNumber: numbers[numbers.length - 1]
  }
}