"use strict";
//~~~c()!!!!@@@###$$$$$$$$$$^%%%^^&&&****(((((((()))))))___+++}}{{{|||}}}
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how much films did u wantched?", "");
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how much films did u wantched?", "");
    }


}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false

};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }


}
showMyDB();

function writeYourGenres() {
    for(let i=0;i<3;i++){
        
        personalMovieDB.genres=prompt(`your genre number ${i+1}`,"");
    }
    
}
writeYourGenres();

for (let i = 0; i < personalMovieDB.count; i++) {
    const lastFilm1 = prompt("what is the last film that u watched?", "");
    const rate1 = +prompt("how would u rate it?", "");
    if (lastFilm1 != null && rate1 != null && lastFilm1.length < 50 && rate1 != '' && lastFilm1 != '') {
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    personalMovieDB.movies[lastFilm1] = rate1;

}
if (personalMovieDB.count < 10) {
    console.log("u have watched quite a few movies ");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("u average viewer ");
} else if (personalMovieDB.count > 30) {
    console.log("u cinemaman");
} else {
    console.log("error");
}
console.log(personalMovieDB);