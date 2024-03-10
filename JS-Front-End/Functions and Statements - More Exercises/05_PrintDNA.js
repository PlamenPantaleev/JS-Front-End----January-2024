function printDna(length) {
    const fourStarsDna = (firstSymbol, secondSymbol) => console.log(`**${firstSymbol}${secondSymbol}**`);
    const twoStarsDna = (firstSymbol, secondSymbol) => console.log(`*${firstSymbol}--${secondSymbol}*`);
    const zeroStarsDna = (firstSymbol, secondSymbol) => console.log(`${firstSymbol}----${secondSymbol}`);
    const symbols = "ATCGTTAGGG";
    let printFourStars = false;

    let indexForSymbols = 0;

    for (let i = 0; i < length; i++) {
        

        let firstSymbol = symbols[indexForSymbols++];
        let secondSymbol = symbols[indexForSymbols++];

        if (indexForSymbols >= symbols.length - 1) {
            indexForSymbols = 0;
        }

        if (i % 2 === 0) {

            if (!printFourStars) {
                fourStarsDna(firstSymbol, secondSymbol);
                printFourStars = true;
                continue;
            }

            zeroStarsDna(firstSymbol, secondSymbol);
            printFourStars = false;

        } else {

            twoStarsDna(firstSymbol, secondSymbol);
        }
    }


}

printDna(4);
printDna(10);