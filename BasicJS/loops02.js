const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .filter(..callback()..) method
const filteredData = nums.filter( (nums) => (nums >= 5) ) // explicit return (no need to write return keyword)
const filteredData02 = nums.filter( (nums) => { // if we are using {}, then we have to write 'return' keyword
    return (nums >= 5)
} )
// console.log(filteredData02)

// .map(..callback()..) method: return the new array [extension of for-each]
const mappedArr = nums.map( (num) => (num * 10) )
// console.log(mappedArr)

/*
1. .filter() is used to filter some elements based upon some condition
2. .map() is used to modify the given array and return the new array of same length
*/

// the next method will operate on the results of the just prev method (chaining)
const resultantArr = nums
    .map( (num) => (num * 10) )
    .map( (num) => (num - 3) )
    .filter( (num) => (num % 3 == 0) )
// console.log(resultantArr)

// reduce(..callback()..) method
const appendedRes = nums.reduce( (acc, curr) => {
    // console.log(`acc: ${acc} and curr: ${curr}, will return ${acc + curr}`);
    return acc + curr
}, 0);
// console.log(appendedRes);

const manipulatedRes = nums
    .map( (num) => {return num * 10} )
    .map( (num) => (num - 3) )
    .filter( (num) => (num % 3 == 0) )
    .reduce( (sum, curr) => (sum + curr), 0 )
console.log(manipulatedRes)