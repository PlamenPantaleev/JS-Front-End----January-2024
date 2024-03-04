function bitcoinMinning(goldGramsPerDay) {
    const bitcoinPrice = 11949.16;
    const goldPriceForOneGram = 67.51;
    let bitcoins = 0;
    let firstBoughtBitcoinDay = 0;
    let days = 0;
    let money = 0;

    for (let i = 0; i < goldGramsPerDay.length; i++) {
        days++;
        let currentGoldInGrams = goldGramsPerDay[i];

        if (days % 3 === 0) {
            currentGoldInGrams = currentGoldInGrams - (currentGoldInGrams * 0.30);
        }

        money += currentGoldInGrams * goldPriceForOneGram;

        if (money >= bitcoinPrice) {

            while (money >= bitcoinPrice) {
                money -= bitcoinPrice;
                bitcoins++;

                if (firstBoughtBitcoinDay === 0) {
                    firstBoughtBitcoinDay = days;
                }
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBoughtBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

// bitcoinMinning([100, 200, 300]);
// bitcoinMinning([50, 100]);
bitcoinMinning([3124.15, 504.212, 2511.124]);