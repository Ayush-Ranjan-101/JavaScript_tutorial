function sayMyName() {
    console.log('Hello, World')
}

// sayMyName     // Reference of the function
// sayMyName()  // Calls the function

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    console.log(result)
    return result
}

const result = addTwoNumbers(3, 5)
// console.log('Result: ', result)

function loginUserMessage(username = 'someone'){   // default parameter
    if(!username){
        console.log('Please enter a name')
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage('Ayush'))


// Accepting multiple arguments at ones
function calculateCartPrice(orderNum, ...prices){
    return prices  // ...prices return array
}

// console.log(calculateCartPrice('A143', 200, 300, 700))


// Passing an object and accessing its properties
const user = {
    userName: 'SpongBob',
    balance: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and balance is ${anyObject.balance}`)
}

handleObject(user)  // or
handleObject({
    userName: 'Patrick',
    balance: 99999999
})

// Passing array as a parameter
const myNewArry = [200, 300, 600, 400]

function getSecondValue(arr){
    return arr[1]
}

console.log(getSecondValue(myNewArry))
console.log(getSecondValue([900, 199, 200, 300]))