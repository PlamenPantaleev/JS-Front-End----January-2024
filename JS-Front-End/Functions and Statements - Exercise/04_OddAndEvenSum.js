function oddAndEvenSum(number) {
    let sumOfAllDigits = sumAllOddAndEven(number);
    console.log(`Odd sum = ${sumOfAllDigits[0]}, Even sum = ${sumOfAllDigits[1]}`);


    function sumAllOddAndEven(a) {
        let evenNumbersSum = 0;
        let oddNumbersSum = 0;
        let numberToString = a.toString();

        for (let i = 0; i < numberToString.length; i++) {
            let currentNum = Number.parseInt(numberToString.charAt(i));

            if (Number.parseInt(currentNum) % 2 == 0) {
                evenNumbersSum+= currentNum;
                continue;
            }

            oddNumbersSum+= currentNum;
        }

        return [oddNumbersSum, evenNumbersSum];
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);