const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

// Some useful functions on number


console.log(balance.toString().length);
//Returns a string of the number with a specified number of digigts after decimal
console.log(balance.toFixed(2));
console.log(typeof(balance))

// Format a number to a specified number of digits
const otherNumber = 123.784
console.log(otherNumber.toPrecision(4))

//Convert a number or data into a string format of the local region
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))



//About Math a built-in object in javascript
console.log('About Math.')

//Turns a number to positive
console.log(Math.abs(-4));
//Rounds a number to its nearest integer
console.log(Math.round(4.6))
//Rounds a number to its nearest greater integer
console.log(Math.ceil(6.2))
//Rounds a number to its nearest lowest integer
console.log(Math.floor(4.6))
//Finding min and max value
console.log(Math.min(4, 3, 6))
console.log(Math.max(4, 3, 6))


//Random numbers
console.log('About random numbers')
console.log(Math.random())

//Generates a random number greater than 0
console.log(Math.floor(Math.random() * 10) + 1)

// Generates a random number between 10 - 30
let min = 10
let max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min)