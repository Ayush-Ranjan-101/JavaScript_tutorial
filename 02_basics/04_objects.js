// const tinderUser = new Object()  // Singleton object
const tinderUser = {}   // Non singleton object

tinderUser.id = '123xyz'    //creating attributes of an object
tinderUser.name = 'Aditya'
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {     //nesting of objects
    email: 'xyz@gmail.com',
    fullName: {
        userfullname: {
            firstName: 'hitesh',
            lastName: 'choudhary'
        }
    }
}

// Accessing nested properties
console.log(regularUser.fullName.userfullname.firstName) 


// Combining multiple objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const obj4 = { obj1, obj2}  // Creates two object in one 
// console.log(obj4)

// {} is target and others are source
// const obj4 = Object.assign({}, obj1, obj2, obj3) // sets all properties seprately
// console.log(obj4)

const obj4 = {...obj1, ...obj2, ...obj3}   // mostly used
console.log(obj4)

const user = [
    {
        id: 1,
        email: 'h@google.com'
    },
    {
        id: 2,
        email: 'i@google.com'
    }
]

console.log(user[1].email)  // accessing data from array of objects

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // boolean result

// Destructuring
 const course = {
    courseName : 'javascript_tut',
    price: '0',
    courseInstructor: 'Ayush'
 }

 const {courseInstructor} = course
 // Extracting with a newly assigned name
 const {courseInstructor: instructor} = course

 console.log(courseInstructor)
 console.log(instructor)

 // Json formats

 // {
//     "name": "Ayush",
//     "coursename": "js_tut",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

// Use json formators to better understand api responses