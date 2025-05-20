const name = 'Ayush'
const repoCount = 50

const gameName = new String('Ayush-hc-aim')

//Bad practice: readablility reduced for printing
console.log(name +' '+ repoCount + ' repos');

// Better approach: String interpolation
console.log(`${name} github repos : ${repoCount}`)

console.log(name[1])
console.log(name.substring(2))
console.log(name.charAt(2))

const url = 'http://vscode.com/extensions'

console.log(url.replace('%20', '-'))
console.log(url.includes('/themes'))

console.log(gameName.split('-'))

// Refer to mdn site for knowing about the in-built functions