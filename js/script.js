"use strict";
//alert('rtrt');
const numberOfFilms = prompt('сколько фильмов', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('последний фильм', ''),
      b = prompt('на сколько оцкниваете', ''),
      c = prompt('последний фильм', ''),
      d = prompt('на сколько оцкниваете', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);