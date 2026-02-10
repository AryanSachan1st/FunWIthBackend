const remaining_guess_box = document.querySelector(".remainingGuess")
const input_box = document.querySelector("#numberInput")

const suggestion_box = document.querySelector(".suggestion")
const prevInputs_box = document.querySelector("#prevInputs")

const stack = []
let attempts = 10
const rand_int = Math.floor(Math.random() * 100)

document.addEventListener("keydown", (event) => {
    if (event.key != "Enter") {
        return
    }
    const value = parseInt(input_box.value)
    if (isNaN(value)) {
        suggestionBox.textContent = "Please enter a valid number!";
        return
    }
    stack.push(value)

    attempts--
    if (value === rand_int) {
        input_box.disabled = true;
        suggestion_box.innerHTML = `You won, correct number is: ${rand_int}`
        return
    } else if (value > rand_int) {
        suggestion_box.innerHTML = "Enter a smaller number"
    } else {
        suggestion_box.innerHTML = "Enter a larger number"
    }

    remaining_guess_box.innerHTML = `You have ${attempts} attempts left`

    if (stack) {
        prevInputs_box.innerHTML = stack
    }

    input_box.value = ""

    if (attempts === 0) {
        input_box.disabled = true
        suggestion_box.innerHTML = `You lost, correct number is: ${rand_int}`
        return
    }
})