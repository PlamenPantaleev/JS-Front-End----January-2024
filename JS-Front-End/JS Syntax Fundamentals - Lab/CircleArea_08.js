function circleArea(radius) {
    if ((typeof radius != "number")) {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
        return;
    }

    const circleRadius = Math.PI * (radius ** 2);
    console.log(circleRadius.toFixed(2));
}

circleArea(5);
circleArea("Name");