// class User{
//     constructor(username, password, email){
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     nameToUpper(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User('aj Styles', '123', 'aj@google.com')
// console.log(user)
// console.log(user.encryptPassword())
// console.log(user.nameToUpper())

// behind the scene 

function User(username, password, email){
    this.username = username
    this.password = password
    this.emial = email

    // this.encryptPassword = function(){
    //     return `${this.password}abc`
    // }

    // this.nameToUpper = function(){
    //     return `${this.username.toUpperCase()}`
    // }
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.nameToUpper = function() {
    return `${this.username.toUpperCase()}`
}

const user = new User('Roman', 'r123', 'roman@gmail.com')
console.log(user)
console.log(user.encryptPassword())
console.log(user.nameToUpper())