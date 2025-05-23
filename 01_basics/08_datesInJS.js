//Dates
let myDate = new Date()
console.log(`Type : ${typeof(myDate)} \n`)  //object

// Formatting of dates in js

// Short formats
console.log(`toDateString() : ${myDate.toDateString()}`)

console.log(`toLocalDateString() : ${myDate.toLocaleDateString()}`)

console.log(`toLocalTimeString() : ${myDate.toLocaleTimeString()}`)

console.log(`toLocalString() : ${myDate.toLocaleString()} \n`) //Combination of above two

// Long detailed formats
console.log(`toString() : ${myDate.toString()}`)

console.log(`toISOSString() : ${myDate.toISOString()}`)

console.log(`toJSON() : ${myDate.toJSON()} \n`)


//Custom date in JS

// let myCustomDate = new Date(2024, 0, 23)  //year, month(0 starting index), date
// let myCustomDate = new Date(2024, 0, 14, 5, 3)  //additional hour and minutes
// let myCustomDate = new Date('01-14-2024')  //month(1 for Jan)-date-year
let myCustomDate = new Date('2024-01-14')  //year-month(1 starting index)-date
console.log(`Custom date : ${myCustomDate.toDateString()} \n`)


//Time stamps and comparison

let myTimeStamp = Date.now()

// .getTime() returns the number of milliseconds since Jan 1, 1970
// good for comparison
console.log(myTimeStamp)
console.log(myCustomDate.getTime())

//get time in seconds
console.log(Math.floor(Date.now()/1000),'\n')


//get specific parts of a date. .getDay/Month/Year,etc give specific parts
let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getMonth())  //0 is Jan
console.log(newDate.getDay(),'\n')  //0 is Sunday and so on

// toLocaleString extra functionalities
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}))