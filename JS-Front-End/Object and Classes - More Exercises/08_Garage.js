function garage(carsInput) {
  let garages = {};

  for (const currentCar of carsInput) {
    const carData = currentCar.split(", ");
    const [garage, property] = carData[0].split(" - ");

    if (!garages.hasOwnProperty(garage)) {
      garages[garage] = [];
    }

    const [prop, value] = property.split(": ");
    const newProp = [{ [prop]: value }];

    garages[garage].push(newProp);
    const lastIndex = garages[garage].length - 1;

    for (let i = 1; i < carData.length; i++) {
      const [property, value] = carData[i].split(": ");

      let newProperty = { [property]: value };

      garages[garage][lastIndex].push(newProperty);
    }
  }

  for (const currentGarage of Object.keys(garages)) {
    console.log(`Garage № ${currentGarage}`);

    for (let i = 0; i < garages[currentGarage].length; i++) {
      let car = garages[currentGarage][i];

      let text = "--- ";

      for (const currentProp of car) {
        let prop = Object.keys(currentProp);
        let value = Object.values(currentProp);

        text += `${prop} - ${value}, `;
      }

      text = text.trimEnd();
      text = text.substring(0, text.length - 1);
      console.log(text);
    }
  }
}

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)