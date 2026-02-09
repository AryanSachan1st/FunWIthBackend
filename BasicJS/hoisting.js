// Hoisting in JavaScript

/* 
  What is Hoisting?
  Hoisting is JavaScript's default behavior of moving declarations to the top 
  of the current scope (script or function) before code execution.
*/

console.log("--- 1. Variable Hoisting with 'var' ---");
console.log("Value of 'a' before declaration:", a); // Output: undefined
var a = 10;
console.log("Value of 'a' after assignment:", a);   // Output: 10


console.log("\n--- 2. Variable Hoisting with 'let' and 'const' ---");
try {
    console.log(b); 
} catch (e) {
    console.log("Error accessing 'b':", e.message); // ReferenceError
}
let b = 20;

try {
    console.log(c);
} catch (e) {
    console.log("Error accessing 'c':", e.message); // ReferenceError
}
const c = 30;


console.log("\n--- 3. Function Hoisting ---");
// A. Function Declaration (Fully hoisted)
sayHello(); 

function sayHello() {
    console.log("Function Declaration: Hello!");
}

// B. Function Expression with 'var'
try {
    sayBye(); 
} catch (e) {
    console.log("Error calling 'sayBye' (var):", e.message); // TypeError: sayBye is not a function
}

var sayBye = function() {
    console.log("Bye!");
};

// C. Function Expression with 'const'
try {
    sayHi(); 
} catch (e) {
    console.log("Error calling 'sayHi' (const):", e.message); // ReferenceError
}

const sayHi = () => {
    console.log("Hi!");
};


console.log("\n--- 4. Class Hoisting ---");
try {
    const obj = new MyClass();
} catch (e) {
    console.log("Error instantiating 'MyClass':", e.message); // ReferenceError
}

class MyClass {
    constructor() {
        this.name = "Test";
    }
}
