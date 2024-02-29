function censoredWords(text, censorWord) {
    let index = text.indexOf(censorWord);

    while (index >= 0) {
        text = text.replace(censorWord, "*".repeat(censorWord.length));

        index = text.indexOf(censorWord);
    }

    console.log(text);
}

