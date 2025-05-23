//array

//Array in js can have elements of different data types
const myArr = [0, 11, 12, 13, 14, 15]
const fruits = ['Pineapple', 'apple', 'banana', ]
const myArr2 = new Array(21, 22, 23, 24, 25)

console.log(`Array delcaration through brackets and class`)
console.log([myArr, typeof(myArr)])  //object
console.log([myArr2, typeof(myArr2)],'\n')  //object

// Array methods

// adds an element at the end
myArr.push(6)
myArr.push(17)
console.log(`Push & pop operation ${myArr} \n`)
// removes the last element and returns it
myArr.pop()


// adds an element at the beginning. Shifts all elements
console.log('Shift and unshift method')
myArr.unshift(9)
// removes the first element from the array, returns the removed element
myArr.shift()
// the two not suitable for large arrays
console.log(myArr, '\n')

console.log('Indexof() and includes() methods')
// return true if includes or false if not incudes
console.log(myArr.includes(9))
//returns index of the first matching element, -1 if not found
console.log(myArr.indexOf(3))

const newArr = myArr.join()
// join() binds all elements into a string
console.log('join() method')
console.log([newArr, typeof(newArr)])

// Difference between slice and splice method

console.log('A', myArr)

//Excludes last index and does not changes the original array
const arr1 = myArr.slice(1, 3)

console.log(arr1)
console.log("B ", myArr)

//Includes last index and changes the original array
const arr2 = myArr.splice(1, 3)

console.log(arr2)
console.log('C ', myArr)