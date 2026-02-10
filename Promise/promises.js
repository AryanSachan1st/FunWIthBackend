// Creating promise1 - basic execution
// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async Task Completed")
//         resolve()
//     }, 2000)
// })

// // Consuming promise1
// promise1
// .then(() => {
//     console.log("Promise Consumed")
// })

// Creating promise2 - handles the data
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const userData = {
//             "name": "Aryan Sachan",
//             "DOB": "11-08-2004",
//             "profession": "AI engineer"
//         }
//         resolve(userData)
//     }, 2000)
// })

// Consuming promise2
// promise2
// .then((data) => {
//     console.log(data)
// })

// Creating promise3 - then chaining, error handling and finally
// const promise3 = new Promise((resolve, reject) => {
//     const data = {
//         "username": "Kartik Tyagi",
//         "age": 21,
//         "profession": "Investment Banker"
//     }
//     const error = true
//     setTimeout(() => {
//         if (!error) {
//             resolve(data)
//         } else {
//             reject("Error: 404 page not found")
//         }
//     }, 2000)
// })

// promise3
// .then((data) => {
//     console.log(data)
//     return {"profession": data.profession, "age": data.age}
// })
// .then((filteredData) => {
//     console.log(filteredData)
//     return {"age": filteredData.age}
// })
// .then((age) => {
//     console.log(age)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => console.log("Promise executed with the respective outcomes"))

// Consuming Promise 3- using async/await (handles error through try-catch)
// async function consumeP3() {
//     try {
//         const data = await promise3
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }
// consumeP3()

// Real world API fetch (async/await)
// async function toDoLists() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos") // await
//         const response = await data.json() // await
//         console.log(response[0])
//     } catch (error) {
//         console.error("Error: ", error)
//     } finally {
//         console.log("Async/Await Finally executed")
//     }
// }
// toDoLists()

// // Real world API fetch (.then().catch().finally())
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data[1])
// })
// .catch((error) => {
//     console.error("Error: ", error)
// })
// .finally(() => {
//     console.log("Finally executed")
// })

/* Rule of the Event Loop:-
1. After every synchronous task finishes, all microtasks are run (in order), then one macrotask is executed, and then the cycle repeats.
2. JS maintains two types of queues - Microtasks queue (for async/await, fetch(), etc) and Macrotasks queue (for setTimeout, setInterval, etc)
3. Microtasks queue will run first then Macrotasks queue
*/

/* KeyNote:-
Both are asynchronous (fetch() and async/await), but there’s no guaranteed order of which finishes first — it depends on:
1. network timing
2. how long the Promise chain or JSON parsing takes
*/

/* 404 error handling:-
fetch() does NOT throw an error automatically for 404 (URL path doesn't exists)
That’s because fetch() only rejects (throws) on network-level errors, like:
1. No internet connection
2. Invalid domain
3. CORS failure
4. DNS failure
*/

const valen_promise = new Promise((resolve, reject) => {
    const bandhan = {
        boy: "Archit",
        girl: "Keerti",
        promise: "Forever Valentine 💝"
    }
    const relationship = Math.floor(Math.random() * 2)
    setTimeout(() => {
        if (relationship) {
            console.log("Promise successfull 🥳")
            resolve(bandhan)
        } else {
            reject()
        }
    }, 2000)
})

// Resolving Valen-Promise (by .then().catch().finally())
valen_promise
.then((data) => {
    const holders = {
        boy: data.boy,
        girl: data.girl
    }
    console.log("Promise holders: ", holders)
    return {promise: data.promise}
})
.then((msg) => {
    console.log("Promise message: ", msg)
})
.catch((err) => {
    console.error("Breakup successfull 💔")
    // throw new Error("Relationship ended due to breakup") // completed
})
.finally(() => {
    const advice = {
        committed: "Be with each other in every ups and down",
        breakup: "F**k them and move on, your life is turly yours"
    }
    console.log("General Advice: ", advice)
})

// Resolving the promise using async-await
async function valentine_result () {
    try {
        const response = await valen_promise
        console.log(response)
    } catch (error) {
        console.error("Breakup successfull 💔 - async-await")
    } finally {
        const advice = {
            committed: "Be with each other in every ups and down",
            breakup: "F**k them and move on, your life is turly yours"
        }
        console.log("General Advice: ", advice)
    }
}
valentine_result()