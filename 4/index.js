import { reduce, some } from 'lodash/fp'

export default function algorithm (input) {
  const rows = getRows(input)
  return rows.length === 1
    ? isValidPassPhrase(rows[0])
    : rows.filter(row => isValidPassPhrase(row)).length
}

function isValidPassPhrase (passphrase) {
  return !hasDuplicates(getWords(passphrase))
}

function getRows (input) {
  return input.split('\n').map(dirtyRow => dirtyRow.trim())
}

function getWords (row) {
  return row.split(' ')
}

function hasDuplicates (words) {
  const countedWordFrequency = countWordFrequency(words)
  return some(wordCount => wordCount > 1)(countedWordFrequency)
}

function countWordFrequency (words) {
  return reduce((countByWord, currentWord) => {
    const currentWordCount = countByWord[currentWord]
    const newWordCount = currentWordCount
      ? currentWordCount + 1
      : 1
    return {
      ...countByWord,
      [currentWord]: newWordCount
    }
  })({})(words)
}
