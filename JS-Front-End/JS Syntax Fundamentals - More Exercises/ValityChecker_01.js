function valityChecker(x1, y1, x2, y2) {
    const distanceBetweenXOneAndYOne = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    const distanceBetweenXTwoAndYTwo = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    const overallDistance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (Number.isInteger(distanceBetweenXOneAndYOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceBetweenXTwoAndYTwo)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(overallDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

valityChecker(3, 0, 0, 4);
valityChecker(2, 1, 1, 1);