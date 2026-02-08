const buttons = document.querySelectorAll('.button')
const body = document.body;

buttons.forEach( (btn) => {
    btn.addEventListener('click', (event) => {
        const id = event.target.id;
        Object.assign(body.style, {
            backgroundColor: id
        })
    })
})