function extract(content) {
    let text = document.getElementById(content).textContent;
    let reg =  /\(([^)]+)\)/g;
    let words = [];

    let match = reg.exec(text);

    while(match) {
        words.push(match[1]);

        match = reg.exec(text);
    }

    return words.join('; ');
}