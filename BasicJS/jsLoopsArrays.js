// Important JavaScript Array Methods and Loops

// --- ARRAYS ---
const myHeroes = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. forEach - Iterates over elements (doesn't return a new array)
// It is used just to loop through, perform an action, but NOT to create a new array.
// Returns: undefined
console.log("--- forEach ---");
myHeroes.forEach((hero) => {
    console.log(`Hello ${hero}`);
});

// 2. map - Creates a new array by applying a function to each element
// Unlike forEach, this DOES return a new array.
// Returns: A new array with transformed elements.
console.log("\n--- map ---");
const squaredNums = nums.map((num) => num * num);
console.log(squaredNums); // [1, 4, 9, 16, ...]

// 3. filter - Creates a new array with elements that pass the test
// It runs the function on each element; if true, it keeps the element.
// Returns: A new array with only the elements that passed the condition.
console.log("\n--- filter ---");
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums); // [2, 4, 6, 8, 10]

// 4. reduce - Reduces the array to a single value
// It iterates through the array and accumulates a result.
// Accumulator starts at initialValue (0 in this case).
// Returns: A single value.
console.log("\n--- reduce ---");
const sum = nums.reduce((accumulator, currentValue) => {
    // 1st iter: acc = 0, curr = 1 => returns 1
    // 2nd iter: acc = 1, curr = 2 => returns 3
    // ...
    return accumulator + currentValue;
}, 0); // 0 is initial value
console.log(`Sum: ${sum}`); // 55

// 5. find - Returns the FIRST element that matches the condition
// It stops searching once it finds the first match.
// Returns: The element itself (not an array), or undefined if not found.
console.log("\n--- find ---");
const firstLargeNum = nums.find((num) => num > 5);
console.log(firstLargeNum); // 6

// 6. includes - Checks if an array contains a specific element
// Simple check for existence.
// Returns: Boolean (true/false)
console.log("\n--- includes ---");
console.log(myHeroes.includes("Thor")); // true
console.log(myHeroes.includes("Batman")); // false

// 7. push & pop - Add/Remove from END
// These methods MODIFY the original array.
// push returns the new length of the array.
// pop returns the removed element.
console.log("\n--- push & pop ---");
myHeroes.push("Black Widow"); // Adds to end
console.log(myHeroes);
const removedHero = myHeroes.pop(); // Removes from end
console.log(`Popped: ${removedHero}`);

// 8. unshift & shift - Add/Remove from START
// These methods MODIFY the original array.
// unshift adds to the start and returns new length.
// shift removes from the start and returns the element.
console.log("\n--- unshift & shift ---");
myHeroes.unshift("Hawkeye"); // Adds to start
console.log(myHeroes);
myHeroes.shift(); // Removes from start
console.log(myHeroes);

// 9. slice - Returns a shallow copy of a portion of an array (start, end-exclusive)
// This strictly DOES NOT modify the original array.
// Returns: A new array with the sliced portion.
console.log("\n--- slice ---");
const topHeroes = myHeroes.slice(0, 3);
// slice(0, 3) effectively means indices 0, 1, and 2. Index 3 is excluded.
console.log("Original:", myHeroes);
console.log("Sliced:", topHeroes);

// 10. splice - Changes contents by removing or replacing existing elements
// This MODIFIES the original array in place.
// Returns: An array containing the deleted elements (if any).
console.log("\n--- splice ---");
// splice(start, deleteCount, item1, item2, ...)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1 without deleting anything
console.log(months); // ["Jan", "Feb", "March", "April", "June"]


// --- LOOPS ---

// 1. Standard for loop
// Classic loop, good when you need index access or custom increments.
console.log("\n--- standard for loop ---");
for (let i = 0; i < 3; i++) {
    console.log(myHeroes[i]);
}

// 2. while loop
// Good when you don't know how many times to loop, but have a condition.
console.log("\n--- while loop ---");
let i = 0;
while (i < 3) {
    console.log(`Number: ${i}`);
    i++;
}

// 3. do...while loop (runs at least once)
// Executes the logic first, THEN checks condition.
console.log("\n--- do...while loop ---");
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// 4. for...of loop (Best for Arrays and Strings)
// Returns VALUES directly. Safer and cleaner for arrays.
// Does NOT work on objects directly.
console.log("\n--- for...of loop ---");
for (const val of myHeroes) {
    console.log(val);
}

const greetings = "Hello World!";
for (const char of greetings) {
    if (char === " ") continue; // Skip space
    // console.log(`Each char is ${char}`);
}

// 5. for...in loop (Best for Objects)
// Iterates over KEYS (or indices in arrays).
// Use this for Objects, not recommended for Arrays if order matters.
console.log("\n--- for...in loop ---");
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Note: for...in on arrays returns indices (keys), not values
// If you use for...in on an array, `key` will be "0", "1", "2"...
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key); // Prints 0, 1, 2...
    console.log(programming[key]);
}
