const team = ['Adam', 'Bob', 'Charlie']
const team2 = ['Eve', 'Sam', 'Xavier']

// Merging two arrays

// Pushes team2 all together in the 3rd position
// team.push(team2)
// console.log(team)

// concate get the result but spread operator works even better
// const newTeam = team.concat(team2)
// console.log(newTeam)

// Spread operator : It can combine multiple or more arrays
const newTeamFinal = [...team, ...team2]
console.log(newTeamFinal)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// Can mention 'Infinity too but better mention depth of flatting
const real_another_array = another_array.flat(2)
console.log(real_another_array)

console.log('Check ',Array.isArray('XYZ')) //boolean result

console.log('Array conversion :', Array.from('XYZ'))

// result [], failing to specify what to convert to array
console.log('Array conversion :', Array.from({name: 'XYZ'}))

let score = 100
let score2 = 200
let score3 = 300

//Returns a new array from a set of elements
console.log(Array.of(score, score2, score3))