function evenAndOddNumbersSubstraction (array) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumEven += array[i];
            continue;
        }

        sumOdd += array[i];
    }

    console.log(sumEven - sumOdd);
}

evenAndOddNumbersSubstraction([1,2,3,4,5,6]);