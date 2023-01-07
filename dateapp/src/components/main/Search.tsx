import { useEffect, useState } from "react";
import apiService from "../../services/tmdb";
import FilmMiniature from "./FilmMiniature";


const Search = ()=>{
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any>([]);
    const [selected, setSelected] = useState<any>(null);
    useEffect(() => {
        async function fetchData() {
          const response = await apiService.searchMovie(query);
          setResults(response.results);
        }
        if (query) {
          fetchData();
        }
      }, [query]);
      
    return(
        <div className="search__container">
            <div className="search__box-film">
                {selected && <img src={`https://image.tmdb.org/t/p/original/${selected.backdrop_path}`}></img>}
            </div>
            <div className="search__box-input">
                <input type="text" value={query} onChange={event => setQuery(event.target.value)}></input>
                {results.map((result:any) => (
                result.backdrop_path !== null ? <FilmMiniature key={result.id} result={result} setSelected={setSelected}/> : ''
                ))}
            </div>
        </div>
        
    )
}

export default Search;