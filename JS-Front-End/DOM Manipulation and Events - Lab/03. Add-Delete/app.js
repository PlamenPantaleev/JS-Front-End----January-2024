function addItem() {
    let elements = document.getElementById("items");
    let elementInput = document.getElementById("newItemText");
    let elementInputValue = elementInput.value;

    let newElement = document.createElement("li");
    newElement.textContent = elementInputValue;
    let aTag = document.createElement("a");
    aTag.href = "#";
    aTag.textContent = "[Delete]";

    newElement.appendChild(aTag);
    elements.appendChild(newElement);

    aTag.addEventListener('click', () => {
        newElement.parentNode.removeChild(newElement);
    })

    elementInput.value = '';
}