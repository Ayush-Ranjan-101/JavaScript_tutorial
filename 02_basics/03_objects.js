// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //can't be accessed via .
    [mySym]: "mykey1",  //using symbol as a name
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) // can only be accessed with [] brackets
console.log(JsUser[mySym])    // can only be accessed with [] brackets
// console.log(JsUser.mySym)  // undefined


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // attempt to changes will fail
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);   

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());  
console.log(JsUser.greeting);  // function reference is returned
console.log(JsUser.greetingTwo())