function addItem() {
    const inputTypeText = document.getElementById('newItemText');
    const inputTypeValue = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.textContent = inputTypeText.value;
    newOption.value = inputTypeValue.value;

    document.getElementById('menu').appendChild(newOption);
    inputTypeText.value = '';
    inputTypeValue.value = '';
}