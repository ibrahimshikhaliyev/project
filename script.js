"use strict";
//~~~c()!!!!@@@###$$$$$$$$$$^%%%^^&&&****(((((((()))))))___+++}}{{{|||}}}



const personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start : function(){
        personalMovieDB.count = +prompt("how much films did u wantched?", "");
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("how much films did u wantched?", "");
    }},
    showMyDB: function() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }},
    writeYourGenres: function() {
        for(let i=0;i<3;i++){
    
            personalMovieDB.genres=prompt(`your genre number ${i+1}`,"");
        }
    
    },
    rememberMyfilms: function () {
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
    },

    detectPersonalLEvel:function () {
        if (personalMovieDB.count < 10) {
    console.log("u have watched quite a few movies ");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("u average viewer ");
    } else if (personalMovieDB.count > 30) {
    console.log("u cinemaman");
    } else {
    console.log("error");
   }
    },
    toggleVisibleMyDB: function (privat) {
        if(privat ==false){
            privat=true;
        }else if(privat==true){
            privat=false;
        }
        return privat;
    }
}

console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat));
personalMovieDB.showMyDB();



