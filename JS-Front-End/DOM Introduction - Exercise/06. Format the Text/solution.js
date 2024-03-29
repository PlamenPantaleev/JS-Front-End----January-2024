function solve() {
  const text = document.getElementById("input").value;

  const sentences = text.split(".");

  let paragraphs = [];
  let currentParagraph = "";
  let sentenceCounter = 0;

  for (let i = 0; i < sentences.length; i++) {
    const currenSentence = sentences[i];

    if (i % 3 === 0) {
      sentenceCounter++;
      currentParagraph += `<p>${currenSentence}.`;
      continue;
    }

    if (sentenceCounter === 2 || i === sentences.length - 1) {
      if (currenSentence === "") {
        paragraphs.push(currentParagraph);
        sentenceCounter = 0;
        currentParagraph = "";
        continue;
      }

      currentParagraph += `${currenSentence}.</p>`;
      paragraphs.push(currentParagraph);
      sentenceCounter = 0;
      currentParagraph = "";

      continue;
    }

    sentenceCounter++;
    currentParagraph += `${currenSentence}.`;
  }

  const output = document.getElementById("output");

  for (const p of paragraphs) {
    output.innerHTML += p;
  }
}
