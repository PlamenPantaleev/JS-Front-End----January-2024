function listOfNames(arrayWithNames) {
    arrayWithNames = arrayWithNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    let printNames = "";

    for (let i = 0; i < arrayWithNames.length; i++) {
        printNames += `${i + 1}.${arrayWithNames[i]}\n`
    }

    console.log(printNames.trim());
}

listOfNames(["John", "Bob", "Christina", "Ema"]);