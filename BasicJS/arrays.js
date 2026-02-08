let arr = new Array(1, 2, 3, "Aryan", true, null)

// arr.push("New Element")
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.unshift("New Start")
// console.log(arr);

// arr.shift("New Start")
// console.log(arr);
// console.log(arr.indexOf(3));
// console.log(arr.includes("Aryan"));

// const newArr = arr.join()
// console.log(newArr) // the null/undefined will be converted to empty string


console.log("Original Arr: ", arr)
const slicedArr = arr.slice(1, 3) // does not modify the original array
console.log("Sliced Arr: ", slicedArr)
const splicedArr = arr.splice(1, 3) // modifies the original array and includes the last range element also
console.log("Original Arr after splice: ", arr)
console.log("Spliced Arr: ", splicedArr)

let arr2 = [10, 20, 30, 40];
let combinedArr2 = [...arr, ...arr2] // using spread operator to combine two arrays
console.log("Combined Arr 2: ", combinedArr2)

let nestedArr = ['a', 'b', 'c', ['d', 'e', ['f', 'g'], 'h']]
let flattenedArr = nestedArr.flat(Infinity) // Infinity can be used to flatten all levels of nested arrays
console.log("Flattened Arr: ", flattenedArr)

console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan")) // creates an array from an iterable object like string
console.log(Array.of(100, 200, 300)) // creates an array from the given arguments