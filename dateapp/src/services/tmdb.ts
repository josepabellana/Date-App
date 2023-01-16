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
async function searchRecommendations(film1:any){
    const params = new URLSearchParams();
    params.set('api_key', api_key);
    try {
        const response = await fetch(`${BASE_URL}/movie/${film1.id}/recommendations?${params.toString()}`);
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function searchRecommendationsTwo(film1:any,film2:any){

    const params = new URLSearchParams();
    params.set('api_key', api_key);
    try {
        let filmsToRequest1:any = [film1];
        let filmsToRequest2:any = [film2];
        let dataF1:any = [];
        let dataF2:any = [];
        let commonRecommendations = [];
        let timenow = (new Date()).getTime();
        console.log(timenow);
        while(commonRecommendations.length < 10 && ((new Date()).getTime() < timenow + 10000 )){
            for(let movie of filmsToRequest1){
                const response = await fetch(`${BASE_URL}/movie/${movie.id}/recommendations?${params.toString()}`);
                let result = await response.json();
                if(result.results.length) dataF1 = dataF1.concat(result.results);
            }
            for(let movie of filmsToRequest2){
                const responseF2 = await fetch(`${BASE_URL}/movie/${movie.id}/recommendations?${params.toString()}`);
                let result = await responseF2.json();
                if(result.results.length) dataF2 = dataF2.concat(result.results)
            }
            console.log(dataF1,dataF2);
            
            
            for(let movie of dataF1){
                console.log(movie)
                for(let movie2 of dataF2){
                    if(movie.id === movie2.id){
                        console.log('RECOMMENDED');
                        commonRecommendations.push(movie);
                        break;
                    }
                }
            }
            filmsToRequest1 = [...dataF1];
            filmsToRequest2 = [...dataF2];
            
        }
        console.log(commonRecommendations);
        
        let obj:any = {};
        let final:any = [];
        for(let movie of commonRecommendations){
          if(!obj[movie.id]){
            obj[movie.id] = true;
            final.push(movie);
          }
        }
        return final;
    } catch (err) {
        console.log(err);
        return false;
    }
}

type ApiService = {
    searchMovie: Function,
    searchRecommendations: Function,
    searchRecommendationsTwo: Function
}
const apiService: ApiService = {
    searchMovie,
    searchRecommendations,
    searchRecommendationsTwo
};

export default apiService;