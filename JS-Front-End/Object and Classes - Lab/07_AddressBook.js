function addressBook(array) {
  let addressBook = {};

  for (const currentRow of array) {
    const [personName, street] = currentRow.split(":");

    addressBook[personName] = street;
  }

  let entitites = Object.entries(addressBook);

  entitites = entitites.sort((a, b) => a[0].localeCompare(b[0]));

  for (const key in entitites) {
    const current = entitites[key];
    console.log(`${current[0]} -> ${current[1]}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
