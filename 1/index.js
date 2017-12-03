export default function algorithm (numbers) {
  const parsed = numbers.split().map(numberString => parseInt(numberString, 10))
  return parsed
}