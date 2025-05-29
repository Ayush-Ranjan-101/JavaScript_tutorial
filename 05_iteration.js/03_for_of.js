// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [11, 12, 13, 14, 15]

for(const num of arr){
    // console.log(num)
}

const word = 'hello world'
for(const letters of word){
    console.log(letters)
}

// Maps : Stores key-value pairs, keys must be unique
// order of insertion is maintained

const map = new Map()
map.set('a', 21)
map.set('b', 22)
map.set('c', 23)
map.set('d', 24)
map.set('e', 25)

// console.log(map)

for(const set of map){   // key-value
    // console.log(set)
}
for(const [key] of map){  // key
    // console.log(key)
}
for(const [key, value] of map){  // key-value destructuring
    console.log(key, '/', value)
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// Error
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }