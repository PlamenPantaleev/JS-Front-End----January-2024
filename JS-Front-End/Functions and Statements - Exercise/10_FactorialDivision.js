function factorialDivision(firstNum, secondNum) {
    const firstNumFactorial = calculateFactorial(firstNum);
    const secondNumFactorial = calculateFactorial(secondNum);

    const divisionBetweenFirstAndSecondFactorial = firstNumFactorial / secondNumFactorial;

    console.log(divisionBetweenFirstAndSecondFactorial.toFixed(2));

    function calculateFactorial(num) {
        let startingSum = 1;

        for (let i = 1; i <= num; i++) {
            startingSum *= i;
        }

        return startingSum;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);