/* 
    Is an Array an object in JS?
    YES. In JavaScript, arrays are technically objects.
    They are specialized objects with numerical keys and a valid `length` property.
*/

const arr = ["Superman", "Batman"];

console.log("Q: Is Array an object?");
console.log(`typeof arr: ${typeof arr}`); // Output: 'object'
console.log(`arr instanceof Object: ${arr instanceof Object}`); // Output: true

/*
    Everything in JavaScript (except primitives) is an object.
    
    Primitives:
    - String, Number, Boolean, Null, Undefined, Symbol, BigInt
    
    Objects in JS:
*/

// 1. Function (Special type of object)
function greet() {}
console.log(`\n1. Function typeof: ${typeof greet}`); // 'function' (but inherits from Object)

// 2. Object Literal (Plain Object)
const user = { name: "Aryan", age: 22 };
console.log(`2. Object Literal typeof: ${typeof user}`); // 'object'

// 3. Array (Special Object)
const heroes = ["Thor", "Spiderman"];
console.log(`3. Array typeof: ${typeof heroes}`); // 'object'

// 4. Date
const now = new Date();
console.log(`4. Date typeof: ${typeof now}`); // 'object'

// 5. RegExp (Regular Expression)
const regex = /abc/;
console.log(`5. RegExp typeof: ${typeof regex}`); // 'object'

// 6. Map and Set
const map = new Map();
const set = new Set();
console.log(`6. Map typeof: ${typeof map}`); // 'object'
console.log(`   Set typeof: ${typeof set}`); // 'object'

/*
    Summary: 
    - Arrays, Functions, regular Objects, Dates, Maps, Sets etc. are all Objects.
    - They all inherit properties from Object.prototype
*/
