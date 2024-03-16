function wordTracker(wordsArray) {
  let words = {};
  const searchedWords = wordsArray[0].split(" ");

  for (const word of searchedWords) {
    words[word] = 0;
  }

  for (let i = 1; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];

    for (const availableWord of searchedWords) {
      if (availableWord === currentWord) {
        words[currentWord] = words[currentWord] + 1;
      }
    }
  }

  Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, occurance]) => console.log(`${word} - ${occurance}`));
  5;
}

function anotherSolve(wordsArray) {
  const searchedWords = wordsArray
    .shift()
    .split(" ")
    .reduce((result, word) => ({ ...result, [word]: 0 }), {});

  for (const word of wordsArray) {
    if (searchedWords.hasOwnProperty(word)) {
      searchedWords[word] += 1;
    }
  }

  Object.entries(searchedWords)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, occurance]) => console.log(`${word} - ${occurance}`));
  5;
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
