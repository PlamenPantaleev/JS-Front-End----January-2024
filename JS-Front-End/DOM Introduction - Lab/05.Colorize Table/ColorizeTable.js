function colorize() {
    let list = document.querySelectorAll('table tr:nth-child(even)')

    for (const item of list) {
        item.style.background = "teal";
    }
}