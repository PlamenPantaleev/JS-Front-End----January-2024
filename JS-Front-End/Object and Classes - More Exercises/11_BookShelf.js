function bookShelf(input) {
    let shelfs = {};
    for (const currentInput of input) {
        if (currentInput.includes(" -> ")) {
            let genreId = Number(currentInput.split(" -> ")[0]);
            let genreName = currentInput.split(" -> ")[1];

            if (!shelfs.hasOwnProperty(genreId)) {
                shelfs[genreId] = {genre: genreName, books: []};
            }

        } else {
            const bookData = currentInput.split(", ");
            const [bookTitle, bookAutor] = bookData[0].split(": ");
            const bookGenre = bookData[1];
           
            for (const id in shelfs) {
              let currentShelf = shelfs[id];

              if (currentShelf.genre === bookGenre) {
                let newBook = {bookTitle: bookTitle, bookAutor: bookAutor}

                currentShelf.books.push(newBook);
                break;
              }
            }
        }
    }

    let sortedIds = Object.keys(shelfs).sort((k1, k2) => shelfs[k2].books.length - shelfs[k1].books.length);

    sortedIds.forEach(id => {
        let genre = shelfs[id].genre;
        let currentBooks = shelfs[id].books.sort((b1, b2) => b1.bookTitle.localeCompare(b2.bookTitle));
        console.log(`${id} ${genre}: ${currentBooks.length}`);
        currentBooks.forEach(b => console.log(`--> ${b.bookTitle}: ${b.bookAutor}`));
    })
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
);
