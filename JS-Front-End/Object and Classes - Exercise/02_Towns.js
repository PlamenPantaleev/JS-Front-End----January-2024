function towns(townsData) {
    let towns = [];

    class town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }

        print() {
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`)
        }
    }

    for (const currentTown of townsData) {
        let city = currentTown.split(" | ");
        let newTown = new town(city[0], Number(city[1]).toFixed(2), Number([city[2]]).toFixed(2));
        towns.push(newTown);
    }

    towns.forEach(town => town.print());
}



function anotherSolve(townsData) {
    let towns = [];

    for (const currentTown of townsData) {
        let city = currentTown.split(" | ");
        let town = {town: city[0], latitude: Number(city[1]).toFixed(2), longitude: Number(city[2]).toFixed(2)};
        towns.push(town);
    }

    towns.forEach(town => console.log(town));
}

towns(
['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'
]
);