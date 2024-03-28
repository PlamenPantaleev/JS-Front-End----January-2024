function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");

  let words = text.split(" ");
  let newText = "";

  if (namingConvention === "Camel Case") {
    newText += words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
      let currentWord = words[i].toLowerCase();
      let firstDigit = currentWord.slice(0, 1).toUpperCase();
      currentWord = firstDigit + currentWord.slice(1, currentWord.length);

      newText += currentWord;
    }
  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i].toLowerCase();
      let firstDigit = currentWord.slice(0, 1).toUpperCase();
      currentWord = firstDigit + currentWord.slice(1, currentWord.length);

      newText += currentWord;
    }
  } else {
    return (result.textContent = "Error!");
  }

  result.textContent = newText;
}
