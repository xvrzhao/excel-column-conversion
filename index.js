const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

String.prototype.getOrdinalNumberInAlphabet = function () {
    return alphabet.indexOf(this.toUpperCase()) + 1
}

Number.prototype.getLetterInAlphabet = function () {
    return alphabet[this - 1]
}

function convertLettersToColumnNumber(letters) {
    letters = [...letters].reverse()
    let number = 0
    for (let index = 0; index < letters.length; index++) {
        const letter = letters[index]
        const indexInAlphabet = letter.getOrdinalNumberInAlphabet()
        number += indexInAlphabet * 26 ** index
    }
    return number
}

function convertColumnNumberToLetters(columnNumber) {
    const numbers = []
    function divide(dividend) {
        const remainder = dividend % 26
        numbers.unshift(remainder)
        const quotient = Math.floor(dividend / 26)
        if (quotient !== 0) divide(quotient)
    }
    divide(columnNumber)
    borrow(numbers)
    const letters = numbers.map(number => number.getLetterInAlphabet())
    return letters.join('')
}

function borrow(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        if (numbers[i] <= 0) {
            numbers[i - 1]--
            numbers[i] += 26
        }
    }
    if (numbers[0] <= 0) numbers.shift()
}

module.exports = {
    convertLetters: convertLettersToColumnNumber,
    convertNumber: convertColumnNumberToLetters
}