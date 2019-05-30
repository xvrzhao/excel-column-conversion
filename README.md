# Excel Column Conversion

This package provides the methods to convert between letters and number for Excel column. For example, A => 1 or 27 => AA.

## Installation

> npm install excel-column-conversion

## Usage

Require this package in your module.

```
const {
    convertNumber, 
    convertLetters
} = require('excel-column-conversion')

const letters = convertNumber(32)   // 'AF'
const number = convertLetters('SQ') // 511
```