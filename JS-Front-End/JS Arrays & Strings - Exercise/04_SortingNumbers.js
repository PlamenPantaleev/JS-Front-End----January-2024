function sortingNumbers(array) {
  array.sort((a, b) => a - b);

  let finalArray = [];

  while (array.length > 0) {
    let firstNum = array.shift();
    let secondNum = array.pop();

    finalArray.push(firstNum);

    if (secondNum) {
      finalArray.push(secondNum);
    }
  }

  return finalArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// sortingNumbers([-12, 1, 35, 72, -25, -1, 34, 29, 99, -50]);
