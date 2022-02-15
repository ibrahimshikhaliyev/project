"use strict";
//~~~c()!!!!@@@###$$$$$$$$$$^%%%^^&&&****(((((((()))))))___+++}}{{{|||}}}



const personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function(){
        count = +prompt("how much films did u wantched?", "");
        while (count == null || count == '' || isNaN(personalMovieDB.count)) {
            count = +prompt("how much films did u wantched?", "");
    }},
    showMyDB: function() {
    if (personalMovieDB.privat == false) {
        return personalMovieDB;
    }},
    writeYourGenres: function() {
        for(let i=0;i<1;i++){
            //personalMovieDB.genres[i]=prompt(`your genre number ${i+1}`,"");
            let genre = prompt("input your genres useing comma " ,"");

            if (genre =='' ||genre == false) {
                i--;
            }
            personalMovieDB.genres=genre.split(",");
    
        }

       
        
        
        
        personalMovieDB.genres.forEach((item,i)=>{
            
            console.log(`your genre number ${i+1} is ${item} `);
            
        });
    
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
        if (count < 10) {
    console.log("u have watched quite a few movies ");
    } else if (count > 10 && count < 30) {
    console.log("u average viewer ");
    } else if (count > 30) {
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

console.log(personalMovieDB.showMyDB());
personalMovieDB.writeYourGenres();

