function extractText() {
    let elements = document.querySelectorAll('#items');
    let textArea = document.querySelector("#result");

    for (const node of elements) {
        textArea.value+= node.textContent + "\n";
    }
}