function login(array) {
    const username = array[0];
    let password = "";
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let i = 1; i < array.length; i++) {
        counter++;

        if (password === array[i]) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }


        console.log("Incorrect password. Try again.");
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);