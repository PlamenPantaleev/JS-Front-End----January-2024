function revealWords(words, text) {
    words = words.split(", ")
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let stars = "*".repeat(currentWord.length);
        let indexOfStars = text.indexOf(stars);
        text = text.replace(stars, currentWord)
    }

    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')