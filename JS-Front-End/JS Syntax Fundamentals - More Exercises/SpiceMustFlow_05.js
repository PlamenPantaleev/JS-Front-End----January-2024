function spiceMustFlow(startingYeld) {
    let numberOfDays = 0;
    let producedYield = 0;
    
    while (startingYeld >= 100) {
        producedYield += startingYeld;
        startingYeld -= 10;
        numberOfDays ++;

        producedYield -= 26;
    }

    if (producedYield >= 26) {
        producedYield -= 26;
    }
    console.log(numberOfDays);
    console.log(producedYield);
}

spiceMustFlow(111);
spiceMustFlow(450);