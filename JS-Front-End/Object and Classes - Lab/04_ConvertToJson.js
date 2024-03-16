function convertToJson(firstName, lastName, hairColor) {

    const personInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    const jsonValue = JSON.stringify(personInfo);

    console.log(jsonValue);
}

convertToJson('George', 'Jones', 'Brown');