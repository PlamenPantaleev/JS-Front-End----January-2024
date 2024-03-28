function subtract() {
    let firstNumValue = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    let result = document.getElementById("result");

    result.textContent = Number(firstNumValue) - Number(secondNumber);
}