// Execution Order of different types of func()
console.log("Regular Call Stack execution 1");

setTimeout(() => console.log("Callback execution 2"), 0); // Callbacks (setTimeout, setInterval, manual callback functions)

Promise.resolve().then(() => console.log("Promise: Microtask queue execution 3")); // Promises (.then()/.catch()/.finally(), async/await, fetch())

console.log("Last regular call stack execution 4");

// how to stop a setInterval()

// let timer = 1
// const interval01 = setInterval(() => {
//     console.log(`Repeating every ${timer} seconds`)

//     if (timer === 10) {
//         clearInterval(interval01);
//         console.log(`Interval stopped`)
//     }
//     timer++;
// }, 1000)

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

const secretBox = document.querySelector(".welcome")

// function secretReveal() {
//     secretBox.textContent = "Hi, I am a Iron Man"
// }

// const t1 = setTimeout(secretReveal, 2000)
// stopBtn.addEventListener('click', (event) => {
//     clearTimeout(t1)
//     console.log("Secret Reveal Stopped")
// }, false)

const secrets = [
    "I am Iron Man",
    "I am a Time Traveller",
    "I love Tech",
    "I love Nature",
    "I love Ghumna-Firna",
    "Marvel is better than DC",
    "COC is better than Clash Royale"
]

let timerInstance;
startBtn.addEventListener("click", (event) => {
    timerInstance = setInterval(revealSecret, 2000)
}, false)

function revealSecret() {
    let randInd = Math.floor(Math.random() * secrets.length)
    secretBox.textContent = `${secrets[randInd]}`
    console.log(secrets[randInd])
}

stopBtn.addEventListener("click", (event) => {
    clearInterval(timerInstance)
    window.alert("Reveal Stopped")
}, false)