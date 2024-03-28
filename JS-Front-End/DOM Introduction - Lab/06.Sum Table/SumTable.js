function sumTable() {
    let table = document.querySelectorAll("table tr");
    let sum = 0;

    for (let i = 1; i < table.length; i++) {
        let columns = table[i].children;
        let cost = columns[columns.length - 1].textContent;
        sum+= Number(cost);
    }

    document.querySelector("#sum").textContent = sum;
}