function stringSubstring(word, text) {

    let words = text.toLowerCase().split(" ");
    let includes = words.includes(word.toLowerCase());

    if (includes) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
stringSubstring('As', '');