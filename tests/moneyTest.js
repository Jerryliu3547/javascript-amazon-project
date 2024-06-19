import { formatCurrency } from "../scripts/utils/money.js";

console.log("test suite: formatCurrency")

// base cases
console.log('converts cents into dollars')
if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}


// edge cases
console.log("work with 0")
if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

// check rounding up
console.log("rounds up to the nearest cent")
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
}

// check rounding down
console.log("rounds down to the nearest cent")
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed')
} else {
    console.log('failed')
}