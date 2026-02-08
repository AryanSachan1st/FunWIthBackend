function multiply(num1, num2) {
    return num1 * num2
}

// object behaviour of a function, JS searches for .power in all chained prototypes till it found .power or null and assigns the value if existed (this is called prototype behaviour of Javascript)
multiply.power = 3 
// console.log(multiply(3, 4))
// console.log(multiply.power)

// New user - injecting our own functions to the prototype
function User(username, password, age) {
    this.username = username
    this.password = password
    this.age = age

    return this
}

User.prototype.incrementAge = function() { // function: incrementAge
    this.age++
}
User.prototype.changePassword = (newPassword) => { // function: changePassword
    if (this.password != newPassword) { // if password is new only then change it
        this.password = newPassword
    }
}

// 'new' Keyword is the must to show these injections in the actual JS prototype
const aryan = new User("Aryan", "12345@rya", 22)
const keshav = new User("Keshav", "keshav@007", 25)

// calling and testing these functions
aryan.incrementAge()
aryan.changePassword("ary@12345Sachan")
console.log(aryan.age, aryan.password)

aryan.incrementAge()
aryan.changePassword("ary@12345Sachan")
console.log(aryan.age, aryan.password)