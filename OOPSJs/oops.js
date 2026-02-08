const user = {
    "username": "Aryan Sachan",
    "loginCount": 8,
    "isLoggedIn": true,

    getUserDetails: function() {
        console.log(this) // this returns the current context (here --> user)
    }
}
// console.log(this) // this (here --> node environment), in browser will be 'Window'
// console.log(user.getUserDetails())

function createUser(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// JS onstructor creation is done by new ketword
const newUser1 = new createUser("Kashish", 5, true)
const newUser2 = new createUser("Rohan", 10, false)

console.log(newUser1)
console.log(newUser2)