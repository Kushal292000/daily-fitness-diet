/* =========================
   BMI CALCULATOR
========================= */

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
        "Age: " + age + "<br>" +
        "Your BMI is " + bmi + " (" + message + ")<br>" +
        explanation;

    result.style.color = color;

    // Animation restart
    result.classList.remove("show");
    void result.offsetWidth;
    result.classList.add("show");
}


/* =========================
   CALORIE CALCULATOR
========================= */

function calculateCalories() {

    let age = document.getElementById("age").value;
    let weight = document.getElementById("calWeight").value;
    let height = document.getElementById("calHeight").value;
    let gender = document.getElementById("gender").value;
    let result = document.getElementById("calorieResult");

    if (age === "" || weight === "" || height === "" || gender === "") {
        result.innerHTML = "Please fill all fields";
        result.style.color = "red";
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

    result.style.color = "green";

    // Animation restart
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


/* Close modal if clicked outside */
window.onclick = function(event) {
    let modal = document.getElementById("planModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
