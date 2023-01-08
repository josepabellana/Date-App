

const BASE_URL = 'https://api.themoviedb.org/3'; //TODO Add to .env
const api_key = '52d4d4049a6718196ee0928448febb5d';



//https://api.themoviedb.org/3/search/movie?api_key={{api_key}}&language=en-US&page=1&include_adult=false&query=gladiator
async function searchMovie(query: string = '') {
    const params = new URLSearchParams();
    params.set('api_key', api_key);
    params.set('query', query);
    try {
        const response = await fetch(`${BASE_URL}/search/movie/?${params.toString()}`);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
}
// async function searchMovieDetails(movieID:number){
//     const params = new URLSearchParams();
//     params.set('api_key', api_key);
//     params.set('query', query);
// }
async function searchRecommendations(film1:any, film2:any){
    // let includeAdult = film1.adult || film2.adult;
    // let maxCount:any = Math.max(film1.vote_count,film2.vote_count);
    // let minCount:any= Math.min(film1.vote_count,film2.vote_count);
    // let maxVote:any = Math.max(film1.vote_average,film2.vote_average);
    // let minVote:any = Math.min(film1.vote_average,film2.vote_average);
    //genres
    // let genres = [...film1.genre_ids];
    // for(let i = 0; i<film2.genre_ids.length;i++){
    //     if(!genres.includes(film2.genre_ids[i])) genres.push(film2.genre_ids[i]);
    // }
    const params = new URLSearchParams();
    params.set('api_key', api_key);
    // params.set('append_to_response', film2.id)
    // console.log(genres)
    // params.set('with_genres', genres.join(',') );
    // params.set('vote_count.gte', minCount);
    // params.set('vote_count.lte', maxCount);
    // params.set('vote_average.gte', minVote);
    // params.set('vote_average.lte', maxVote);
    // params.set('include_adult', includeAdult);
    try {
        const response = await fetch(`${BASE_URL}/movie/${film1.id}/recommendations?${params.toString()}`);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

type ApiService = {
    searchMovie: Function,
    searchRecommendations: Function
}
const apiService: ApiService = {
    searchMovie,
    searchRecommendations,
};

export default apiService;