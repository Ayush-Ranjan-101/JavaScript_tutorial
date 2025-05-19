const accountId = 112244
let accountEmail = "xyz@gmail.com"
var accountPassword = "123456"
let isActive
accountCity = "Jaipur"

// Prints data in a raw, linear format 
// Best for general purpose logging - strings, numbers, objects, etc 
console.log(accountCity)
console.log([accountId, accountEmail, accountPassword, isActive])

// accountId = 114422  //Will throw an error since const can't be changed
accountEmail= "abc@gmail.com"
accountPassword = "987654"
accountCity = "Jodhpur"
isActive = true

// displays data in tabular format
// Best for array of objects, objects with key-value pairs, etc
console.table([accountId, accountEmail, accountPassword, accountCity, isActive])
console.table({accountId, accountEmail, accountPassword, accountCity, isActive})