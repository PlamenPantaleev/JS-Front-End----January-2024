function cats(catInfoInput) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const currentCat of catInfoInput) {
        const catData = currentCat.split(' ');

        const cat = new Cat(catData[0], catData[1]);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);