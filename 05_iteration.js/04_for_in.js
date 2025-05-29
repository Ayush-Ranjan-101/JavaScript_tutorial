const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const i in myObject){
    // console.log(`${i} shortcut is for ${myObject[i]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {   // accesses index
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);   // Not printing 
}