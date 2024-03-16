function phoneBook(array) {

    let phoneBook = {};

    for (let i = 0; i < array.length; i++) {
        const current = array[i].split(' ');
        const name = current[0];
        phoneBook[name] = current[1];
    }

    for (const name in phoneBook) {
       console.log(`${name} -> ${phoneBook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);