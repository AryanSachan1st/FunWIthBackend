// Difference betweeen var, let, and const-
// const var1 = 123;
// let var2 = "Test String";
// var var3 = true;
// var4 = 45.67; // Implicit global variable

// console.table([var1, var2, var3]);
// var is deprecated, use let or const instead because of block scope and hoisting issues.

// falsy values: false, 0, "", null, undefined, NaN, -0, BigInt 0n

// Conversion examples-
let data = "33";

let num = Number(data)
console.log(typeof num) // "number"
console.log(num) // 33 ("33"), NaN ("33abc"/undefined/any_String), 1/0 (true/false), 0 (null)

let data2 = 1

let booleanData = Boolean(data2)
console.log(typeof(booleanData)) // "boolean"
console.log(booleanData) // true (any non-zero number/non empty data), false (0, NaN, null, undefined, "")


// Nullish Coalescing Operator (??), working similar to OR (||) operator but only considers null and undefined as falsy
let var1;
var1 = null ?? 10;
console.log(var1)

var1 = 20 ?? null ?? 30; // returns first non-null/undefined value
console.log(var1)

// Ternary Operator
// let var1 = (condition) ? true : false;
// let var1 = (condition) ? true : false;
// let var1 = (condition) ? true : false;