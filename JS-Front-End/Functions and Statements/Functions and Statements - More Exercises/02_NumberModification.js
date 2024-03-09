function numberModification(number) {
  let sumOfDigits = 0;
  let avg = 0;

  while (true) {
    let currentNum = Number.parseInt(number);

    while (currentNum != 0) {
      let lastDigit = currentNum % 10;

      sumOfDigits += lastDigit;

      currentNum = Math.floor(currentNum / 10);
    }

    avg = sumOfDigits / number.toString().length;

    if (avg > 5) {
      break;
    }

    number += "9";
    sumOfDigits = 0;
  }

  console.log(number);
}

numberModification(101);
numberModification(5835);
