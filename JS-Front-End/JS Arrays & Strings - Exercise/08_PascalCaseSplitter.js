function pascalCaseSplitter(text) {
    let array = [];
    let currentWord = "";
    let symbolsCounter = 0;

  while (text !== "") {
    let currentSymbol = text.charCodeAt(0);

    if (currentSymbol >= 65 && currentSymbol <= 90) {
        currentWord += text.charAt(0);
        text = text.substring(1, text.length);

        for (let i = 0; i < text.length; i++) {
            let currentSymbol = text.charCodeAt(i);

            if (currentSymbol >= 97 && currentSymbol <= 122) {
                currentWord += text.charAt(i);
                symbolsCounter++;
                continue;
            }

            break;

        }
        array.push(currentWord);
        currentWord = "";
        text = text.substring(symbolsCounter, text.length);
        symbolsCounter = 0;
    }
  }
  console.log(array.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')
