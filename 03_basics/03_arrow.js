const user = {
    userName: 'Ayush',
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the site`)
        console.log(this)
    }
}

user.welcomeMessage()
user.userName = 'Bob'
user.welcomeMessage()

// console.log(this);

// function users(){
//     let username = "Ayush"
//     console.log(this.username);
// }

// users()

// const users = function () {
//     let username = "Ayush"
//     console.log(this.username);
// }

const users =  () => {
    let username = "Ayush"
    console.log(this);
}


// users()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // Explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2   // Implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )   // Implicit return

const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()