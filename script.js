"use strict";
//~~~!!!@@@###$$^%%%^^&&&****(((((((()))))))___+++}}{{{|||}}}
const numberOfFilms=+prompt("how much films did u wantched?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat:false

};
const lastFilm1 = prompt("what is the last film that u watched?" ,""),
      rate1=+prompt("how would u rate it?" ,""),
      lastFilm2= prompt("what is the last film that u watched?" ,""),
      rate2=+prompt("how would u rate it?" ,"")
;
personalMovieDB.movies[lastFilm1]=rate1;
personalMovieDB.movies[lastFilm2]=rate2;
console.log(personalMovieDB);
