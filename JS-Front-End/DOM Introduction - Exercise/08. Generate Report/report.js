function generateReport() {
    const boxes = document.querySelectorAll("thead tr th input");
    const checkedBoxesIndexes = [];

    // 1. Getting the checked boxes indexes

    for (let i = 0; i < boxes.length; i++) {
        const checkBox = boxes[i];

        if (checkBox.checked) {
            checkedBoxesIndexes.push(i);
        }
    }

    // 2. Getting the text output as an array

    const tableData = document.querySelectorAll("tbody tr");
    const outputObjectsArray = [];

    for (const currentTableRow of tableData) {
        let values = [];

        for (const index of checkedBoxesIndexes) {
            let checkBoxName = boxes[index].name;
            let rowValue = currentTableRow.children[index].textContent;

            values.push(checkBoxName);
            values.push(rowValue);
        }

        // convert the array values into an object
        let object = {};
        for (let i = 0; i < values.length; i+= 2) {
            let checkBoxName = values[i];
            let value = values[i + 1];
            object[checkBoxName] = value;
        }
        outputObjectsArray.push(object);
    }

    // 3. display the text in the HTML file

    const outputArea = document.getElementById("output");

    outputArea.value = JSON.stringify(outputObjectsArray, null, 2);
}