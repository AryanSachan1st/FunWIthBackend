const apiURL = "https://api.github.com/users/hiteshchoudhary"
const mainBox = document.createElement("div")
document.body.append(mainBox)

const mainLink = document.createElement("p")
mainBox.append(mainLink)
mainLink.textContent = "Reveal the Creator"
console.log(mainBox)

mainBox.setAttribute("class", "mainBox")

Object.assign(mainBox.style, {
    "backgroundColor": "#2a2929ff",
    "color": "white",
    "height": "50vh",
    "width": "70vw",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "font-size": "40px"
})
Object.assign(document.body.style, {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "backgroundColor": "black"
})
mainLink.addEventListener("mouseenter", (event) => {
    Object.assign(mainBox.style, {
        "text-shadow": "1px 1px 1px white",
        "color": "#2a2929ff",
        "cursor": "pointer"
    })
})
mainLink.addEventListener("mouseleave", (event) => {
    Object.assign(mainBox.style, {
        "color": "white"
    })
})
const showDiv = document.createElement("div")
document.body.append(showDiv)
showDiv.textContent = "Hello Guys"
Object.assign(showDiv.style, {
    "color": "white"
})

mainLink.addEventListener("click", (event) => {
    const xhr = new XMLHttpRequest(); // get an instance of xhr

    // 🧠 Step 1: Tell the browser what to do when data comes back (call-back)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // '4' means request is done
            const data = JSON.parse(this.responseText)
            showDiv.innerHTML = `<h1>${data.login}</h1>
            <img src = "${data.avatar_url}"> 
            <p> followers: ${data.followers} </p>`
            console.log(data)
        }
    }
    xhr.open("GET", apiURL) // open connection
    xhr.send() // send request through connection
    // xhr.send(JSON.stringify({ name: "Aryan" })); for post requests
})