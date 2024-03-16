function catalogue(productsInput) {
    let productsCatalogue = {};

    for (const currentProduct of productsInput) {
        const [name, price] = currentProduct.split(" : ");
        const firstLetterOFromName = name.charAt(0);

        if (!productsCatalogue.hasOwnProperty(firstLetterOFromName)) {
            productsCatalogue[firstLetterOFromName] = [];
        }

        productsCatalogue[firstLetterOFromName].push({name, price})
    }

    const sortedKeys = Object.keys(productsCatalogue).sort((a, b) => a.localeCompare(b));

    let sortedCatalogue = {};

    sortedKeys.forEach(k => {
        sortedCatalogue[k] = productsCatalogue[k]
    })

    Object.entries(sortedCatalogue)
    .forEach(c => c[1].sort((a, b) => a.name.localeCompare(b.name)));

    for (const currentProocuts of Object.entries(sortedCatalogue)) {
        console.log(currentProocuts[0]);

        for (const prooduct of currentProocuts[1]) {
            console.log(`  ${prooduct.name}: ${prooduct.price}`);
        }
    }
}

// catalogue(
// [
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]
// );

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    );