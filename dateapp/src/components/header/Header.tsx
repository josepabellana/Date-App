import "./header.css";
import React, { useState, useEffect } from "react";
import apiService from "../../services/tmdb";
import FilmMiniature from "./FilmMiniature";
const Header = ({setFilm}:{
  setFilm:any,
}) => {
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
    async function fetchDetails(id:number){
      const response = await apiService.searchMovieDetails(id);
      setFilm(response);
    }
    if (selected !== null) fetchDetails(selected.id);      
    setResults([]);
  }, [selected]);
  return (
    <header className="header__container">
      <nav className="nav__container">
        <div className="header__search">
          <input
            className="header__input"
            type="text"
            value={query}
            placeholder = "Search films or TV series(TBD)"
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          {results.length ? (
            <div className="header__results">
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
          ) : (
            ""
          )}
        </div>
        <div className="header__title">
          <h1>Date App</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
