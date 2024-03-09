function signCheck(firstNum, secondNum, thirdNum) {
  const multiply = (a, b) => a * b;
  const firstResult = multiply(firstNum, secondNum);
  const finalResult = multiply(firstResult, thirdNum);

  if (finalResult < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

console.log(signCheck(5, 12, -12));
