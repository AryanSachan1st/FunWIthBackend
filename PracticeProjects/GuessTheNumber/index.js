const attemptsInput = document.querySelector(".remainingGuess")
const inputField = document.querySelector("#numberInput")
const button = document.querySelector("button")
const suggestionBox = document.querySelector(".suggestion")
const correctNum = Math.floor(Math.random() * 100) + 1;
const prevInpBox = document.querySelector("#prevInputs")
const prevInputs = [];

let remainingAttempts = 10;

// We do not need to run this code for 10 times in a loop, we just have to run this code when some event happens like button clicking, untill then no code execution required.
// The JavaScript engine executes code synchronously (line by line).
// These 10 iterations run immediately and instantly, one after another. No user input, no pauses — it just loops in microseconds. (if we use loops)

button.addEventListener("click", (btnEvent) => {
    let inpNum = parseInt(inputField.value)
    if (isNaN(inpNum)) {
        suggestionBox.textContent = "Please enter a valid number!";
        return;
    }
    if (inpNum === correctNum) {
        suggestionBox.textContent = `Congratulations! The correct number is: ${correctNum}`
        inputField.disabled = true
        button.disabled = true
        return

    } else if (inpNum < correctNum) {
        suggestionBox.textContent = "Enter a larger number"
    } else if (inpNum > correctNum) {
        suggestionBox.textContent = "Enter a smaller number"
    }
    prevInputs.push(inpNum)
    if (prevInputs != undefined) {
        prevInpBox.textContent = `prev inputs: ${prevInputs}`
    }
    remainingAttempts--;

    attemptsInput.textContent = `You have ${remainingAttempts} attempts left to guess the right number`

    if (remainingAttempts === 0) {
        suggestionBox.textContent = `You lost! The correct number was ${correctNum}`
        inputField.disabled = true
        button.disabled = true
        return;
    }
    inputField.value = "";
})