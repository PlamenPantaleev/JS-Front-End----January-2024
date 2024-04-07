function encodeAndDecodeMessages() {
    const sendAndEncodeButton = document.querySelectorAll('button')[0];
    const decodeButton = document.querySelectorAll('button')[1];

    sendAndEncodeButton.addEventListener('click', (e) => {
        const parentElement = sendAndEncodeButton.parentElement;
        let textInput = parentElement.querySelector('textarea');
        let value = textInput.value;

        let encodedInput = value.split('').map(d => {
            const currentDigit = d.charCodeAt(0);
            const encodedDigit = String.fromCharCode(currentDigit + 1);
            return encodedDigit;
        }).join("");

        textInput.value = '';
        decodeButton.parentElement.querySelector('textarea').value = encodedInput;
    });

    decodeButton.addEventListener('click', (e) => {
        const parentElement = decodeButton.parentElement;
        let textInput = parentElement.querySelector('textarea');
        let value = textInput.value;

        let decodedOutput = value.split('').map(d => {
            const currentDigit = d.charCodeAt(0);
            const encodedDigit = String.fromCharCode(currentDigit - 1);
            return encodedDigit;
        }).join("");

        textInput.value = '';
        decodeButton.parentElement.querySelector('textarea').value = decodedOutput;
    })
}