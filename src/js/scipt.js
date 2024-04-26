'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let lastMovieWatched = +prompt("Один из последних фильмов?");
let ratingOfThisFilm = prompt("На сколько оцените его?");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet:false
};

personalMovieDB.movies[lastMovieWatched] = ratingOfThisFilm;

console.log(personalMovieDB['movies']);

