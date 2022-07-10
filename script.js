const numberOfFilms = +prompt('скільки фільмів ви подивились', "");
const personalMovieDB ={
   count:numberOfFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};

const a = prompt('Один з останніх переглянутих фільмів', '');
const b = prompt('Яку оцінку йому дасте', '');
const c = prompt('Один з останніх переглянутих фільмів', '');
const d = prompt('Яку оцінку йому дасте', '');

personalMovieDB.movies[a]=[b];
personalMovieDB.movies[c]=[d];
console.log(personalMovieDB);
