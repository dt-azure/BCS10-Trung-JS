function salaryCalculator() {
    var workingDays = document.getElementById("working-day").value * 1;
    var totalSalary = Intl.NumberFormat().format(workingDays * 100000);
    document.getElementById("salary-result").innerText = `Total salary: ${totalSalary} VND`;
    document.getElementById("salary-result").style.height = "60px";
}

function average() {
    var avgNum1 = document.getElementById("avg-num1").value * 1;
    var avgNum2 = document.getElementById("avg-num2").value * 1;
    var avgNum3 = document.getElementById("avg-num3").value * 1;
    var avgNum4 = document.getElementById("avg-num4").value * 1;
    var avgNum5 = document.getElementById("avg-num5").value * 1;
    var avg = (avgNum1 + avgNum2 + avgNum3 + avgNum4 + avgNum5) / 5;
    document.getElementById("avg-result").innerText = `The average of 5: ${avg}`;
    document.getElementById("avg-result").style.height = "60px";
}

function currencyConverter() {
    var currencyUSD = document.getElementById("currency-usd").value * 1;
    const usdToVND = 23500;
    var currencyVND = Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(currencyUSD * usdToVND);
    document.getElementById("currency-result").innerText = `Converted to VND: ${currencyVND} VND`;
    document.getElementById("currency-result").style.height = "60px";
}

function rectangleCalc() {
    var length = document.getElementById("length").value * 1;
    var width = document.getElementById("width").value * 1;
    var perimeter = 2 * (length + width);
    var area = length * width;
    document.getElementById("rectangle-result").innerHTML = `Perimeter of the rectangle: ${perimeter} <br> Area of the rectangle: ${area}`;
    document.getElementById("rectangle-result").style.height = "150px";
    document.getElementById("rectangle-result").style.lineHeight = "75px";
}

function digitsSum() {
    var number = document.getElementById("number").value * 1;
    var result = (number % 10) + parseInt(number / 10);
    document.getElementById("digits-sum-result").innerText = `Sum of 2 digits: ${result}`;
    document.getElementById("digits-sum-result").style.height = "60px";
}