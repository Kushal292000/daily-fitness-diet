// BMI CALCULATOR
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (weight === "" || height === "") {
        result.innerHTML = "Please enter both values";
        result.style.color = "red";
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let message = "";
    let color = "";
    let explanation = "";

    if (bmi < 18.5) {
        message = "Underweight";
        color = "orange";
        explanation = "You should increase healthy calorie intake.";
    } 
    else if (bmi < 24.9) {
        message = "Normal Weight";
        color = "green";
        explanation = "Great job! Maintain your healthy lifestyle.";
    } 
    else if (bmi < 29.9) {
        message = "Overweight";
        color = "orange";
        explanation = "Try regular exercise and balanced diet.";
    } 
    else {
        message = "Obese";
        color = "red";
        explanation = "Consult a doctor and start controlled diet plan.";
    }

    result.innerHTML =
        "Your BMI is " + bmi + " (" + message + ")<br>" + explanation;

    result.style.color = color;
}


// CALORIE CALCULATOR
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
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    result.innerHTML = 
        "Your estimated daily calorie need is " + Math.round(bmr) + " kcal";

    result.style.color = "green";
}
