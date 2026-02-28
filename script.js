// ===============================
// BMI CALCULATOR (WITH AGE + ANIMATION)
// ===============================

function calculateBMI() {

    let age = document.getElementById("bmiAge").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (age === "" || weight === "" || height === "") {
        result.innerHTML = "Please fill all fields";
        result.style.color = "red";
        result.classList.add("show");
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let message = "";
    let color = "";

    if (bmi < 18.5) {
        message = "Underweight";
        color = "#ff9800";
    } 
    else if (bmi < 24.9) {
        message = "Normal Weight";
        color = "#2e7d32";
    } 
    else if (bmi < 29.9) {
        message = "Overweight";
        color = "#ff5722";
    } 
    else {
        message = "Obese";
        color = "#d32f2f";
    }

    result.innerHTML =
        "Age: " + age + "<br> BMI: " + bmi + " (" + message + ")";

    result.style.color = color;

    // Animation trigger
    result.classList.remove("show");
    void result.offsetWidth;
    result.classList.add("show");
}


// ===============================
// CALORIE CALCULATOR
// ===============================

function calculateCalories() {

    let age = document.getElementById("age").value;
    let weight = document.getElementById("calWeight").value;
    let height = document.getElementById("calHeight").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("calorieResult");

    if (age === "" || weight === "" || height === "" || gender === "") {
        result.innerHTML = "Please fill all fields";
        result.style.color = "red";
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } 
    else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    result.innerHTML =
        "Your estimated daily calorie need is " + Math.round(bmr) + " kcal";

    result.style.color = "#2e7d32";
}
