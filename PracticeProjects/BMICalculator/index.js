const height_box = document.querySelector("#height")
const weight_box = document.querySelector("#weight")
const result_box = document.querySelector("#ans")
const submit_btn = document.querySelector("#submit")

// We calculate everything INSIDE the click event
submit_btn.addEventListener("click", (event) => {
    // 1. Get current values from the input boxes
    // parse to Float to ensure they are treated as numbers
    const height = parseFloat(height_box.value) 
    const weight = parseFloat(weight_box.value)

    // 2. Calculate BMI
    const bmi = weight / (height * height) // BMI formula is kg/m^2

    // 3. Log and display results
    console.log("Height:", height)
    console.log("Weight:", weight)
    console.log("BMI:", bmi)
    
    // Check if inputs are valid numbers before displaying
    if (!isNaN(bmi)) {
        result_box.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`
    } else {
        result_box.innerHTML = "Please enter valid numbers"
    }
})

