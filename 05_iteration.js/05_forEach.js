const coding = ['js', 'rudy', 'java', 'python', 'cpp']

coding.forEach( function (val){
    // console.log(val)
})

coding.forEach( (item) => {
    // console.log(item)
})

function printIt(item){
    // console.log(item)
}

coding.forEach(printIt) // Passing function reference

coding.forEach( (item, i, arr) => {
    console.log(item, i, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )