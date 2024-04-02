function create(words) {
  let divElements = words.map((word) => {
    const pElement = document.createElement("p");
    pElement.textContent = word;
    pElement.style.display = "none";

    const divElement = document.createElement("div");
    divElement.appendChild(pElement);

    return divElement;
  });

  const parentDivElement = document.getElementById("content");
  const fragment = new DocumentFragment();

  for (const divElement of divElements) {
    divElement.addEventListener("click", (e) => {
      const pElement = divElement.querySelector("p");
      pElement.style.display = "block";
    });

    //parentDivElement.appendChild(divElement);
  }
  // parentDivElement.addEventListener('click', (e) => {
  //    if (e.target.tagName = 'DIV') {
  //       const pElement = e.target.querySelector('p');
  //       pElement.style.display = 'block';
  //    }
  // })

  parentDivElement.append(...divElements);
}
