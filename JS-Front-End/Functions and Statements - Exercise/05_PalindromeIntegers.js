function palindromeIntegers(numbers) {
    let values = [];

    for (let i = 0; i < numbers.length; i++) {
        let reversedNum = reverseNum(numbers[i]);

        values[i] = checkIfNumbersArEqual(reversedNum, numbers[i]);
    }

    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }

    function reverseNum(num) {
        let numToString = num.toString();
        let reversedNum = "";

        for (let i = numToString.length - 1; i >= 0; i--) {
            reversedNum += numToString[i];
        }

        
        return Number.parseInt(reversedNum);
    }

    function checkIfNumbersArEqual(a, b) {
        if (a === b) {
            return true;
        }

        return false;
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);