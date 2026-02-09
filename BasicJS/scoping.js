// Functions and Scoping in JavaScript

console.log(add(3, 5)) // can be called before declaration due to hoisting
function add(x, y) {
    return x+y
}

const add2 = function(x, y) {
    return x+y
}
console.log(add2(3, 5)) // must be called after declaration

// this keyword (context only works in objects)
const userBio = {
    name: "Karan",
    age: 19,

    getBio: function() {
        // console.log(this)
        return `${this.name} is ${this.age} years old` // 'this' refers to the current context of userBio object
    }
}
console.log(userBio.getBio())
userBio.name = "Agraj" // changing the name property (context changes)
console.log(userBio.getBio())
console.log(this) // 'this' in global context refers to the global object (window in browsers, global {} in Node.js)

const thisInFunc = function() {
    let userName = "Varun"
    console.log(this.userName) // 'this' here refers to the global object, not the function's scope
    // console.log(this) // prints the global object
}
thisInFunc() // prints undefined

// Arrow functions
const firstArrowFunc = () => {
    let userName = "Archit"
    console.log(this.userName) // undefined, as arrow functions do not have their own 'this'
    // console.log(this) // prints the global object
}
firstArrowFunc()

const oneLiner = (num1, num2) => num1 + num2
console.log(oneLiner(4, 6)); // this ; is very important to run the IIFE below

// IIFE (Immediately Invoked Function Expression) syntax --> ()()
(function chai() {
    console.log(`Don't forget to drink your chai!`);
})();

// IIFE with parameters -> syntax --> ({parameters} => {...func definition...})({arguments})
( ({name, coding_lang}) => {
    console.log(`Hello, ${name}! Welcome to ${coding_lang} scoping.`)
} )({name: "Aryan", coding_lang: "JavaScript"});
