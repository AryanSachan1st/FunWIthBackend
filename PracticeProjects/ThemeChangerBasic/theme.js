const themesBox = document.querySelector(".themesBox");
const buttons_list = themesBox.children;

Array.from(buttons_list).forEach((btn) => {
    btn.addEventListener("click", (event) => {
        document.body.style.backgroundColor = event.target.id
    })
});