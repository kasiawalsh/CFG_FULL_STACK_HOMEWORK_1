const additionButton = document.getElementById("additionButton");
const clearButton = document.getElementById("clearButton");
const resultElement = document.getElementById("result");

additionButton.addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Please enter valid numbers.";
    } else {
        let result = number1 + number2;
        resultElement.textContent = `Result: ✨ ${result} ✨`;
    }
});

clearButton.addEventListener("click", function () {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    resultElement.textContent = "Result: ?";
});
