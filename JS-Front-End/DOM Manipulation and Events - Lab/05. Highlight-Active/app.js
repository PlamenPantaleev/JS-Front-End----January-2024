function focused() {
    let fields = document.querySelectorAll("body div input");
    console.log(fields);

    for (const currentField of fields) {
        currentField.addEventListener('focus', ()=> {
            currentField.parentElement.className = 'focused';
        });

        currentField.addEventListener('blur', () => {
            currentField.parentElement.className = '';
        })
    }
}