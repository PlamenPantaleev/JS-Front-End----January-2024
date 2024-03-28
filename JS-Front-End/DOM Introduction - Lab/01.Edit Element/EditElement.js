function editElement(element, text, replacer) {
    const content = element.textContent;
    const matcher = new RegExp(text, 'g');
    const editedText = content.replace(matcher, replacer)
    element.textContent = editedText;
}