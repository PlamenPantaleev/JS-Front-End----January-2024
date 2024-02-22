function checkIfNumbersAreSame(number) {
  let same = true;
  let sum = 0;
  let numberToString = number.toString();

  for (let i = 0; i <= numberToString.length - 1; i++) {
    let currentNum = numberToString[i];

    if (i != numberToString.length - 1) {
        if (currentNum !== numberToString[i + 1]) {
            same = false;
          }
    }
    sum += Number(numberToString[i]);
  }

  console.log(same);
  console.log(sum);
}

checkIfNumbersAreSame(2222222);
checkIfNumbersAreSame(1234);5
