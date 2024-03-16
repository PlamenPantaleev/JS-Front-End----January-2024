function convertToObject(jsonInput) {

    const object = JSON.parse(jsonInput);

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');