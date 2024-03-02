function arrayRotation(array, numberOfRotatations) {
    for (let i = 1; i <= numberOfRotatations; i++) {
        let currentFirstElement = array[0];

        for (let k = 0; k < array.length - 1; k++) {
            array[k] = array[k + 1];
        }

        array[array.length - 1] = currentFirstElement;
    }

    let print = array.join(" ");
    console.log(print);
}

arrayRotation([51, 47, 32, 61, 21], 2);