

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


type ApiService = {
    searchMovie: Function,

}
const apiService: ApiService = {
    searchMovie,
};

export default apiService;