function inventory(heroesArray) {
    let heroes = [];

    for (const currentHero of heroesArray) {
        const data = currentHero.split("/ ");
        const heroName = data[0].trimEnd();
        const heroLevel = Number(data[1]);
        const items = data[2].split(", ");

        let hero = {
            name: heroName,
            level: heroLevel,
            items: items
        }

        heroes.push(hero);
    }

    heroes = heroes.sort((h1, h2) => h1.level - h2.level);

    for (const currentHero of heroes) {
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`items => ${currentHero.items.join(", ")}`);
    }
}

inventory(
[
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
    );