// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// Does not has it's own scope follows parent scope
// if (balance > 500) console.log("test"),console.log("test2");

// the above line is treated as
// if (balance > 500) {
//   console.log("test");
// }
// console.log("test2");


// if, else if, else

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// true if all expressions are true  : AND operator
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// true even if only one expression is true : OR operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}