const clock = document.querySelector('.clock')

setInterval(() => {
    const date = new Date();
    const currTime = date.toLocaleTimeString()
    clock.textContent = currTime
}, 1000)
