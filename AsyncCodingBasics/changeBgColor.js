const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const parentBox = document.querySelector(".mainBox")

let intervalInstance;
startBtn.addEventListener("click", (event) => {
    if (!intervalInstance) { // prevent multiple init of instance (in case of multiple clicks)
        intervalInstance = setInterval(startChangingBgColor, 2000)
    }

}, false)

function startChangingBgColor() {
    let currColor = randomColor()
    parentBox.style.backgroundColor = currColor
    console.log(currColor)
}
function randomColor() {
    let color = "#"
    const dict = "0123456789ABCDEF"
    
    for (let i=0; i<6; i++) {
        let randInd = Math.floor(Math.random() * 16)
        color += dict[randInd]
    }
    return color
}

stopBtn.addEventListener("click", () => {
    clearInterval(intervalInstance)
    intervalInstance = null // to restart the instance
    console.log("Background Change stopped")
    window.alert("Background Change stopped")
}, false)