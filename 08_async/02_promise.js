const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is completed')
        resolve()   // Invokes .then
    }, 2000)
})

promiseOne.then(()=>{
    console.log('Promise consumed')
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 commpleted')
        resolve()
    }, 2000)
}).then(()=> {
    console.log('Promise 2 consumed')
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName: 'Ayush', email: 'xyz@example.com'})
    }, 2000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({userName: 'Ayush', password: 'xyzabc'})
        }else{
            reject('Error: Something went wrong!')
        }
    }, 2000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.userName
})
.then((name) => {
    console.log(name)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('Promised either resolved or got rejected')
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({Repo: 'JavaScript', password: 'xyz123'})
        } else {
            reject('Error JS went wrong')
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const url = 'https://jsonplaceholder.typicode.com/users/1'
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }

// getAllUsers()


const url = 'https://jsonplaceholder.typicode.com/users/1'
fetch(url)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('Err: ', error)
})