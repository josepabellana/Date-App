import { useEffect, useState } from "react";
import apiService from "../../services/tmdb";
import FilmMiniature from "../header/FilmMiniature";

const Search = ({ setFilm, id }: { setFilm: any; id: number }) => {
  const [query, setQuery] = useState<string>("");
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
  useEffect(() => {
    if (selected !== null) setFilm(selected);
    setResults([]);
  }, [selected]);

  return (
    <>
      <div className="search__container">
        <h1>{id}</h1>
        {selected ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${selected.poster_path}`}
            className="search__box-film"
          ></img>
        ) : (
          <div className="search__box-film"></div>
        )}

        <input
          type="text"
          value={query}
          className="search__box-input"
          onChange={(event) => setQuery(event.target.value)}
        ></input>
      </div>
      {results.length ?
      <div className="search__results">
        {results
          .slice(0, 5)
          .map((result: any) =>
            result.poster_path !== null ? (
              <FilmMiniature
                key={result.id}
                result={result}
                setSelected={setSelected}
                setQuery={setQuery}
              />
            ) : (
              ""
            )
          )}
      </div>
      :
      ''
      }
    </>
  );
};

export default Search;
