"use strict";
//~~~c()!!!!@@@###$$^%%%^^&&&****(((((((()))))))___+++}}{{{|||}}}
const numberOfFilms=+prompt("how much films did u wantched?","");

let item1=true
   ,item2=false;

console.log(item1||item2);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat:false

};
for (let i = 0; i < personalMovieDB.count; i++) {
    const lastFilm1 = prompt("what is the last film that u watched?" ,"");
    const rate1=+prompt("how would u rate it?" ,"");
    if (lastFilm1 != null && rate1 != null && lastFilm1.length < 50  && rate1 !='' && lastFilm1 !='') {
        console.log("done");
    }else {
        console.log("error");
        i--;
    }
    personalMovieDB.movies[lastFilm1]=rate1;
    
}
if (personalMovieDB.count < 10) {
    console.log("u have watched quite a few movies ");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("u average viewer ");
}else if(personalMovieDB.count > 30) {
    console.log("u cinemaman");
}else{
   console.log("error");
}
console.log(personalMovieDB);
