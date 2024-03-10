function mathPower(number, power) {
    let poweredNumber = 1;

    for (let i = 0; i < power; i++) {
        poweredNumber *= number;
    }

    console.log(poweredNumber);
}

mathPower(2, 8)