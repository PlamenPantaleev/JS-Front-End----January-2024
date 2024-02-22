function multiplicationTable(number) {
    let tableForPrint = "";

    for (let i = 1; i <= 10; i++) {
        tableForPrint += `${number} X ${i} = ${number * i} \n`;
    }

    console.log(tableForPrint.trim());
}

multiplicationTable(5);