/* =========================
   BMI CALCULATOR
========================= */

function calculateBMI() {

    let age = parseFloat(document.getElementById("bmiAge").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        result.innerHTML = "Please fill all fields correctly";
        result.style.color = "red";

        result.classList.remove("show");
        void result.offsetWidth;
        result.classList.add("show");
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
        "Age: " + age + "<br>" +
        "Your BMI is " + bmi + " (" + message + ")<br>" +
        explanation;

    result.style.color = color;

    result.classList.remove("show");
    void result.offsetWidth;
    result.classList.add("show");
}


/* =========================
   CALORIE CALCULATOR
========================= */

function calculateCalories() {

    let age = parseFloat(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("calWeight").value);
    let height = parseFloat(document.getElementById("calHeight").value);
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("calorieResult");

    if (isNaN(age) || isNaN(weight) || isNaN(height) || gender === "") {
        result.innerHTML = "Please fill all fields correctly";
        result.style.color = "red";

        result.classList.remove("show");
        void result.offsetWidth;
        result.classList.add("show");
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

    result.style.color = "#2e7d32";

    result.classList.remove("show");
    void result.offsetWidth;
    result.classList.add("show");
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


/* Close modal when clicking outside */
window.onclick = function(event) {
    let modal = document.getElementById("planModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
