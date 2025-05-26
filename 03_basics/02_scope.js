// var c = 200

let a = 300
if (true) {
    let a = 10
    let b = 20
    console.log('INNER:', a)
}

// console.log(a)
// // console.log(b) //Error: accessing local scope
// console.log(c)

function one(){
    let username = 'Ayush'

    function two(){
        const website = 'github'
        console.log(username)
    }
    // console.log(website) //local scope can't be accessed

    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) //Error
}

// console.log(username)  //error



// ++++++++++++++++++ interesting ++++++++++++++++++

// Learn about hoisting in Js
console.log(addone(5))  // it runs 

// Js hoists function declarations to the top of the scope
function addone(num){
    return num + 1
}

// JavaScript does hoist the addTwo variable, but not its value
console.log(addTwo(5))  // TypeError: addTwo is not defined
const addTwo = function(num){
    return num + 2
}