class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username: ${this.username}`
    }

    static createId(){   // making it private
        return '123'
    }
}

const ayush = new User('ayush')
console.log(ayush.logMe())
// console.log(ayush.createId())


class Phone extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Phone('iphone', 'iphone@apple.com')
console.log(iphone)
console.log(iphone.logMe())
// console.log(iphone.createId())