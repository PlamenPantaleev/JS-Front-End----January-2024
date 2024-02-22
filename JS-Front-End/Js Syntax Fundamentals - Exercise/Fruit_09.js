function calculateFriutPrice(fruit, weightInGr, priceForOneKg) {
    let weightInKg = weightInGr / 1000;
    let totalPrice = weightInKg * priceForOneKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateFriutPrice('orange', 2500, 1.80);
calculateFriutPrice('apple', 1563, 2.35);