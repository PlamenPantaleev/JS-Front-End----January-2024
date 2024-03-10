function loadingBar(percent) {
  if (percent === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
    return;
  }

  let firstDigit = percent.toString().charAt(0);
  let percentTags = getPercentTags(percent);

  function getPercentTags(p) {
    let percentTags = "[";

    for (let i = 1; i <= Number.parseInt(firstDigit); i++) {
      percentTags += "%";
    }

    for (let i = Number.parseInt(firstDigit) + 1; i <= 10; i++) {
      percentTags += ".";
    }

    percentTags += "]";

    return percentTags;
  }

  console.log(`${percent}% ${percentTags}`);
  console.log("Still loading...");
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
