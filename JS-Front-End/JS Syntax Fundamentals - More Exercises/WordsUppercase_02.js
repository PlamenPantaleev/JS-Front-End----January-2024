function wordsToUppercase(textInput) {
    const words = textInput.toUpperCase();
    const regex = /[\w]+/g;
    const array = words.match(regex).join(", ");

    console.log(array);

}

wordsToUppercase('Hi, how are you?');