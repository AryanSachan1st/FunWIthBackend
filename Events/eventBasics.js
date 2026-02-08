const listItems = document.querySelectorAll("li")

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currenTarget
// clientX, clientY, screenX, screenY, tiltX, tiltY, x, y
// altkey, ctrlkey, shiftkey, keycode, enterkey, spacebar

listItems.forEach((anyList) => {
    anyList.addEventListener("click", (event) => {
        console.log(event.type)
        console.log(event.target) // where event happened
        console.log(event.target.parent) // returns the parent 
        console.log(event.currentTarget) // where the eventListner is attached
        // console.log(event.toElement)
        console.log(event.x, event.y) // same as clientX, clientY (mouse pointer relative to screen)
        // tiltX, tiltY --> for styles/touch tilt deg
        // event.stopPropagation() // will stop the execution to go to the parent control (stop bubbling) --> bottom up

    }, false) // true -> capturing mode () --> top down
})

document.addEventListener('keydown', (event) => {
    console.log("Key Pressed: ", event.key)
    console.log("Cntrl Key Pressed: ", event.ctrlKey)
    console.log("Alt Key Pressed: ", event.altKey)
    console.log("Shift Key Pressed: ", event.shiftKey)
    // event.preventDefault() // stop the default process
})

document.querySelector('.list').addEventListener('click', (event) => {
    const target = event.target
    console.log(target)
    target.parentNode.remove()
})
