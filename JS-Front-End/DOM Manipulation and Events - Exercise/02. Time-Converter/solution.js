function attachEventsListeners() {
  const buttons = document.querySelectorAll("input[type=button]");

  const convertToDays = (valueInSeconds) => valueInSeconds / 60 / 60 / 24;
  const convertToHours = (valueInSeconds) => valueInSeconds / 60 / 60;
  const convertToMinutes = (valueInSeconds) => valueInSeconds / 60;
  const convertToSeconds = (type, value) => {
    switch (type) {
      case "days":
        return value * 24 * 60 * 60;
      case "hours":
        return value * 60 * 60;
      case "minutes":
        return value * 60;
      case "seconds":
        return value;
    }
  };

  for (const currentButton of buttons) {
    currentButton.addEventListener("click", (e) => {
      const inputTextType = currentButton.parentElement.querySelector("input[type=text]").id;
      const inputTextValue = Number(currentButton.parentElement.querySelector("input[type=text]").value);

      const convertedValueToSeconds = convertToSeconds(inputTextType, inputTextValue);
      const convertedValueToDays = convertToDays(convertedValueToSeconds);
      const convertedValueToHours = convertToHours(convertedValueToSeconds);
      const convertedValueToMinutes = convertToMinutes(convertedValueToSeconds);

      const outputFields = document.querySelectorAll('input[type=text]');

      for (const currentField of outputFields) {
        const fieldName = currentField.id;

        if (fieldName === 'days') {
            currentField.value = convertedValueToDays;
        } else if (fieldName === 'hours') {
            currentField.value = convertedValueToHours;
        } else if (fieldName === 'minutes') {
            currentField.value = convertedValueToMinutes;
        } else {
            currentField.value = convertedValueToSeconds;
        }
      }
    });
  }
}
