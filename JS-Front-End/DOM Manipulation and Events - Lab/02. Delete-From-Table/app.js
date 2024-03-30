function deleteByEmail() {
    let tableData = document.querySelectorAll("tbody tr");
    let input = document.querySelector('input[name=email]');
    let result = document.getElementById("result");

    for (const currentRow of tableData) {
        let email = currentRow.children[1].textContent;

        if (email === input.value) {
            currentRow.parentNode.removeChild(currentRow);
            result.textContent = "Deleted.";
            break;
        }
    }

    if (result.textContent === '') {
        result.textContent = "Not found.";
    }
    input.value = '';
}