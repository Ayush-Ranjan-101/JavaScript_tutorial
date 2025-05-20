//Primitive
// 7 types : Strnig, Number, Boolean, null, undefined, Symbol, BigInt

const score = 98.5
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log('Typeof symbol:', typeof(id))

console.log(id === anotherId)   //false

const bigNumber = 2322838927092359087n  //BigInt

// Reference (Non primitive)
// Array, Objects, Functions  //Will be discussed later

const fruits = ['apple', 'mango', 'Banana']   //Array

let myObj = {     //Object
    name: "xyz",
    age: 58
}

const myFunction = function(){  //function
    console.log("Hello world");
}

console.log(typeof(fruits))    //object. Also called function
console.log(typeof(myObj))     //object. Also called function
console.log(typeof(myFunction))  //function. Also called object function

//Javascript is a dynamically typed language