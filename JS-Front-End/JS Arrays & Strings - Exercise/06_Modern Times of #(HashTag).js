function hastag(text) {
    let regex = new RegExp("#[A-Za-z]+", "g");
    let words = text.match(regex);

    for (let i = 0; i < words.length; i++) {
        console.log(words[i].substring(1));
    }
}

hastag('Nowadays everyone uses # to tag a #special word in #socialMedia');