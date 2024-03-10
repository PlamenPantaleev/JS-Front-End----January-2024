function simpleCalculator(firstNum, secondNum, operator) {
  const operation = getOperation(operator);

  const result = operation(firstNum, secondNum);

  console.log(result);

  function getOperation(operator) {
    switch (operator) {
      case "add":
        return (a, b) => a + b;
      case "subtract":
        return (a, b) => a - b;
      case "multiply":
        return (a, b) => a * b;
      case "divide":
        return (a, b) => a / b;
    }
  }
}

simpleCalculator(3, 4, "add");
