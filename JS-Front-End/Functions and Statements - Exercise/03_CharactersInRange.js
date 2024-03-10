function charactersInRange(firstCharacter, secondCharacter) {
  let firstCharacterAsciiCode = firstCharacter.charCodeAt(firstCharacter);
  let secondCharacterAsciiCode = secondCharacter.charCodeAt(secondCharacter);

  const asciiCodesSorted = [
    firstCharacterAsciiCode,
    secondCharacterAsciiCode,
  ].sort((a, b) => a - b);

  let symbols = "";

  for (let i = asciiCodesSorted[0] + 1; i < asciiCodesSorted[1]; i++) {
    symbols += String.fromCharCode(i) + " ";
  }

  symbols = symbols.trimEnd();
  console.log(symbols);
}

charactersInRange("a", "b");
charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
