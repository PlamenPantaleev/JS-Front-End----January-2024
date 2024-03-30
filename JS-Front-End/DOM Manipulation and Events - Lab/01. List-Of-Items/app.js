function addItem() {
    let newElementInput = document.getElementById("newItemText");
    let inputValue = newElementInput.value;
    let existingElements = document.getElementById("items");

    let newElement = document.createElement("li");

    newElement.textContent = inputValue;
    newElementInput.value = "";

    existingElements.appendChild(newElement);
}