function search() {
  let towns = document.getElementsByTagName("li");
  let input = document.getElementById("searchText").value;
  let result = document.getElementById("result");

  let mathces = 0;

  for (const town of towns) {
   let currentTown = town.innerText;
    if (currentTown.includes(input)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      mathces++;
    }
  }

  result.textContent = `${mathces} matches found`
}
