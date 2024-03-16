function oddNumber(textInput) {
    let wordsArray = {};

    let words = textInput.split(" ");

    for (const word of words) {
        let currentWord = word.toLowerCase();
        if (!wordsArray.hasOwnProperty(currentWord)) {
            wordsArray[currentWord] = 1;
            continue;
        }

        wordsArray[currentWord] = wordsArray[currentWord] + 1;
    }
    
    let oddOccuranceArray = {};

    for (const key in wordsArray) {
        const currentValue = wordsArray[key];

        if (currentValue % 2 !== 0) {
            oddOccuranceArray[key] = currentValue;
        }
    }

    let keys = Object.keys(oddOccuranceArray).sort((a, b) => oddOccuranceArray[b] - oddOccuranceArray[a]).join(" ").toString();
    console.log(keys);
}

oddNumber('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddNumber('Cake IS SWEET is Soft CAKE sweet Food');