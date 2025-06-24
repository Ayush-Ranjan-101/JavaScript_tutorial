class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)   // passes 'this' reference behind the scene
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const xyz = new Teacher('XYZ', 'xyz@gmail.com', '1234')
console.log(xyz)
xyz.addCourse()

xyz.logMe()
const abc = new User('abc')
abc.logMe()

console.log(xyz instanceof User)
console.log(xyz instanceof Teacher)