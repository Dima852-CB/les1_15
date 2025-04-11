let numberOfFilms = Number(prompt('Сколько фильмов посмотрели?', ''));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const favouriteFilm1 = prompt('Любимый фильм?');
const rating1 = prompt('Оценка?');
const favouriteFilm2 = prompt('Любимый фильм?');
const rating2 = prompt('Оценка?');

personalMovieDB.movies[favouriteFilm1] = rating1;
personalMovieDB.movies[favouriteFilm2] = rating2;

console.log(personalMovieDB);
