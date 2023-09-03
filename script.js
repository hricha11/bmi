document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value/100);

    if (weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
        return;
    }

    const bmi = weight / (height * height);//calculating bmi
    const category = interpretBMI(bmi);
    let resultElement = document.getElementById("result");
    if (category=="Normal weight")
    resultElement.innerHTML = `<span style="color: Green;">Your BMI is: ${bmi.toFixed(2)} (${category})</span>`;
    else
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
});

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal weight";
        const colour=1;
    } else if (bmi <= 30) {
        return "Overweight";
    } else{
        return "Obese";
    }
}
