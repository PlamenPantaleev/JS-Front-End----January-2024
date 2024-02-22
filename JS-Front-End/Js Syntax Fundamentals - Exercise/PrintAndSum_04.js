function printAndSum(startNum, endNum) {
    let numbersInString = "";
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        numbersInString += i +" ";
        sum += i;
    }

    console.log(numbersInString.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);