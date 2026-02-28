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
