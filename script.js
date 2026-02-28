/* =========================
   BMI CALCULATOR
========================= */

function calculateBMI() {

    const age = parseFloat(document.getElementById("bmiAge").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (isNaN(age) || isNaN(weight) || isNaN(heightCm)) {
        result.innerHTML = "Please fill all fields correctly";
        result.style.color = "red";
        animateResult(result);
        return;
    }

    const height = heightCm / 100;
    const bmi = (weight / (height * height)).toFixed(2);

    let message, color, explanation;

    if (bmi < 18.5) {
        message = "Underweight";
        color = "orange";
        explanation = "You should increase healthy calorie intake.";
    } 
    else if (bmi < 24.9) {
        message = "Normal Weight";
        color = "#2e7d32";
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
        `Age: ${age}<br>
         Your BMI is ${bmi} (${message})<br>
         ${explanation}`;

    result.style.color = color;
    animateResult(result);
}


/* =========================
   CALORIE CALCULATOR
========================= */

function calculateCalories() {

    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("calWeight").value);
    const height = parseFloat(document.getElementById("calHeight").value);
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("calorieResult");

    if (isNaN(age) || isNaN(weight) || isNaN(height) || gender === "") {
        result.innerHTML = "Please fill all fields correctly";
        result.style.color = "red";
        animateResult(result);
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    result.innerHTML =
        `Your estimated daily calorie need is ${Math.round(bmr)} kcal`;

    result.style.color = "#2e7d32";
    animateResult(result);
}


/* =========================
   RESULT ANIMATION
========================= */

function animateResult(element) {
    element.classList.remove("show");
    void element.offsetWidth;
    element.classList.add("show");
}


/* =========================
   PROGRAM MODAL POPUP
========================= */

function openPlan(title, text) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("planModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("planModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("planModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
