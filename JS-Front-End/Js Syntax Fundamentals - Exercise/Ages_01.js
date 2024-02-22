function determineAge(ageInput) {
    if (ageInput < 0) {
        console.log("out of bounds");
        return;
    }

    let resultText = "";

    if (ageInput <= 2 ) {
        resultText = "baby";

    } else if (ageInput <= 13) {
        resultText = "child";

    } else if (ageInput <= 19) {
        resultText = "teenager";

    } else if (ageInput <= 65) {
        resultText = "adult";

    } else {
        resultText = "elder";

    }
    console.log(resultText);
}

determineAge(20);
determineAge(1);
determineAge(100);
determineAge(-1);