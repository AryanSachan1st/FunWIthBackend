const weightInp = document.querySelector("#weight")
const heightInp = document.querySelector("#height")
let height, weight, bmi;

heightInp.addEventListener('change', (event) => {
    const valueInp = event.target.value;

    height = parseFloat(valueInp);
})

weightInp.addEventListener('change', (event) => {
    const valueInp = event.target.value;

    weight = parseFloat(valueInp);
})


const submitBtn = document.querySelector("button")
submitBtn.addEventListener('click', (event) => {
    const output = document.querySelector('#ans')

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        bmi = (weight / Math.pow(height, 2)).toFixed(2);
        output.textContent = bmi
    } else {
        output.textContent = "Enter valid values (height != 0)"
    }
})
