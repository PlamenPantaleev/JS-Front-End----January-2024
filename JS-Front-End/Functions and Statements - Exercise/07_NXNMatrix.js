function nXnMatrix(n) {
    for (let i = 0; i < n; i++) {
        let text = "";

        for (let k = 0; k < n; k++) {
            text+= n + " ";
        }
        console.log(text.trimEnd());
    }
}

nXnMatrix(7);