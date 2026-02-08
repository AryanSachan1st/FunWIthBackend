function calc(num1, num2) {
    let result = 0
    if (!isNaN(num1)  && !isNaN(num2)) {
        result = num1 + num2
    }
    return result
}

// NaN (Not a Number) will pass because typeof NaN === "number".

let result = calc(21, 24)
console.log(result)

function greet(name) {
    if (!name) {
        return "Write a proper name please!"
    }
    return `Hii ${name}... Welcome to my AI world 🤖`
}
console.log(greet("Virat"))
console.log(greet(""))

function calcTotal(...values) {
    let total = 0;
    for (let i=0; i<values.length; i++) {
        if (!isNaN(values[i])) {
            total += values[i];
        }
    }
    return total;
}
console.log(calcTotal(100, 200, 300))