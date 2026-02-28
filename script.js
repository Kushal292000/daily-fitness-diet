function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML = "Please enter both values";
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi < 24.9) {
        message = "Normal Weight";
    } else if (bmi < 29.9) {
        message = "Overweight";
    } else {
        message = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is " + bmi + " (" + message + ")";
}
