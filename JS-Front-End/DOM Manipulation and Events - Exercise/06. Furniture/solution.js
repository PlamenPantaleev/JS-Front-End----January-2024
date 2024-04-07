function solve() {
  const buttons = document.querySelectorAll("button");
  const furnitureTbodyElement = document.querySelector(".table tbody");

  const generateButton = buttons[0];
  const buyButton = buttons[1];

  generateButton.addEventListener("click", (e) => {
    const jsonInput = generateButton.previousElementSibling.value;
    const objects = JSON.parse(jsonInput);

    for (const currentObject of objects) {
      const imgElement = document.createElement("img");
      imgElement.src = currentObject.img;
      const imgTdElement = document.createElement("td");
      imgTdElement.appendChild(imgElement);

      const nameParagraphElement = document.createElement("p");
      nameParagraphElement.textContent = currentObject.name;
      const nameTdElement = document.createElement("td");
      nameTdElement.appendChild(nameParagraphElement);

      const priceParagraphElement = document.createElement("p");
      priceParagraphElement.textContent = currentObject.price;
      const priceTdElement = document.createElement("td");
      priceTdElement.appendChild(priceParagraphElement);

      const decParagraphElement = document.createElement("p");
      decParagraphElement.textContent = currentObject.decFactor;
      const decTdElement = document.createElement("td");
      decTdElement.appendChild(decParagraphElement);

      const markElement = document.createElement("input");
      markElement.setAttribute("type", "checkbox");
      const markTdElement = document.createElement("td");
      markTdElement.appendChild(markElement);

      const furnitureTrElement = document.createElement("tr");
      furnitureTrElement.appendChild(imgTdElement);
      furnitureTrElement.appendChild(nameTdElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decTdElement);
      furnitureTrElement.appendChild(markTdElement);

      furnitureTbodyElement.appendChild(furnitureTrElement);
    }
  });

  buyButton.addEventListener("click", (e) => {
    const checkedItems = document.querySelectorAll(
      ".table tbody tr td input[type=checkbox]:checked"
    );

    let boughtItems = [];
    let totalPrice = 0;
    let decorFartor = 0;

    for (const item of checkedItems) {
      const tr = item.parentElement.parentElement;
      const paragraphs = tr.querySelectorAll("p");

      const itemName = paragraphs[0].textContent;
      const price = Number(paragraphs[1].textContent);
      const decorationFactor = Number(paragraphs[2].textContent);

      boughtItems.push(itemName);
      totalPrice += price;
      decorFartor += decorationFactor;
    }

    const textArea = buyButton.previousElementSibling;
    textArea.textContent += `Bought furniture: ${boughtItems.join(", ")}\n`;
    textArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    textArea.textContent += `Average decoration factor: ${decorFartor / boughtItems.length}`;
  });
}
