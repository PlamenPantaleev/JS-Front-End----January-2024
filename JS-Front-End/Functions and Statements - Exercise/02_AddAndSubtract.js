function addAndSubstract(firstNum, secondNum, thirdNum) {
    let sum = sumfirstTwoNumbers(firstNum, secondNum);

    function sumfirstTwoNumbers(a ,b) {
        return a + b;
    }

    let finalNumber = subtractThirdNumberFromSum(sum, thirdNum);

    function subtractThirdNumberFromSum(a ,b ) {
        return sum - thirdNum;
    }

    console.log(finalNumber);
}

addAndSubstract(23, 6, 10);