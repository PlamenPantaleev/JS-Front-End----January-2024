function thePyramid(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let pyramidHeight = 0;
    let steps = 0;

    while (base > 0 ) {
        steps++;
        let materialsNeeded = base * base;
        pyramidHeight+= 1 * increment;

        if (base - 2 <= 0) {
            goldRequired = (base * base) * increment;
            base -= 2;
            continue;
        }

        if (steps % 5 === 0 && pyramidHeight != 0) {
            
            stoneRequired+= ((base - 2) * (base -2)) * increment;
            lapisLazuliRequired+= (materialsNeeded - ((base - 2) * (base - 2))) * increment;
            base -= 2;
            continue;
        }

        marbleRequired+= (materialsNeeded - ((base - 2) * (base -2))) * increment;
        stoneRequired+= ((base - 2) * (base -2)) * increment;


        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

// thePyramid(11, 1);
// thePyramid(11, 0.75);
// thePyramid(12, 1);
thePyramid(23, 0.5);