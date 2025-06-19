// static function as an object
const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDeatails: function(){
        console.log('Got user details from database')
        console.log(`Username: ${this.username}`)
    }
}

console.log(user.username)
console.log(user.getUserDeatails())
console.log(this)

// Using functin as a class
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

console.log('---------')

const userOne = new User('Ayush', 12, true)
const userTwo = new User('Coder', 11, false)
console.log(userOne.constructor())
console.log(userTwo)