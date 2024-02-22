function calculation(firstNum, secondNum, operator) {
    let result = 0;
    if (operator == "+") {
        result = firstNum + secondNum;

    } else if (operator == "-") {
        result = firstNum - secondNum;

    } else if (operator == "*") {
        result = firstNum * secondNum;

    } else if (operator == "/") {
        result = firstNum / secondNum;

    } else if (operator == "%") {
        result = firstNum % secondNum;

    } else if (operator == "**") {
        result = firstNum ** secondNum;

    }

    console.log(result);
}

calculation(5, 2, "*");
calculation(10, 2, "**");