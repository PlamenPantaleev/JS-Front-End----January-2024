function calc() {
    let firstNum = document.querySelector("#num1").value
    let secondNum = document.querySelector('#num2').value

    let sum = document.querySelector('#sum');
    sum.value = Number(firstNum) + Number(secondNum);
}
