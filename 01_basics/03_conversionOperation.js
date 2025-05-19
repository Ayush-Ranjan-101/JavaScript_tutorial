let score = "33"        //output => 33
// let score = "33abc"    //output => NaN
// let score = null      //output => 0
// let score;           //output => NaN
// let score = true    //output => 1
// let score = "xyz"  //output => NaN

console.log([score, typeof(score)])

let valueInNum = Number(score)
console.log([valueInNum, typeof(valueInNum)])

// let isLoggedIn = 1             //output => true
// let isLoggedIn = ""           //output => false
// let isLoggedIn = undefined   //output => false
// let isLoggedIn = null       //output => false
let isLoggedIn = NaN          //output => false

console.log([isLoggedIn, typeof(isLoggedIn)])

let boolean = Boolean(isLoggedIn)
console.log([boolean, typeof(boolean)])

// There can be more types of conversion operation error

//Treats every other values according to the first value
console.log("1" + 2 + 2)     //122
console.log(1 + 2 + "2")    //32

console.log(+true)    //1
console.log(+"")     //0