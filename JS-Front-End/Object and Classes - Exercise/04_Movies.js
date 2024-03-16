function movies(moviesData) {
  const addMoviesText = "addMovie";
  const directedByText = "directedBy";
  const onDateText = "onDate";

  let movies = [];

  for (const currentMovie of moviesData) {
    if (currentMovie.includes(addMoviesText)) {
      const substringIndex = addMoviesText.length + 1;
      const movieName = currentMovie.substring(substringIndex);

      let movie = {
        name: movieName
      }
      movies.push(movie);

    } else if (currentMovie.includes(directedByText)) {
      const index = currentMovie.indexOf(directedByText);
      const movieName = currentMovie.substring(0, index - 1);
      const directorName = currentMovie.substring(index + (directedByText.length + 1));
      const existingMovie = movies.find(movie => movie.name === movieName);

      if (existingMovie) {
        existingMovie.director = directorName;
      }

    } else if (currentMovie.includes(onDateText)) {
      const index = currentMovie.indexOf(onDateText);
      const movieName = currentMovie.substring(0, index - 1);
      const date = currentMovie.substring(index + (onDateText.length + 1));
      const existingMovie = movies.find(movie => movie.name === movieName);


      if (existingMovie) {
        existingMovie.date = date;
      }
    }
  }

  movies.filter(movie => movie.name && movie.date && movie.director).forEach(movie => console.log(JSON.stringify(movie)));
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

movies([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
  ]
  ) 
