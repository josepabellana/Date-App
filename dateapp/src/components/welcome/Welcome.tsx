import "./welcome.css";
import React, { useState, useEffect } from "react";
import apiService from "../../services/tmdb";
import FilmMiniature from "./FilmMiniature";
import Input from "./Input";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Welcome = ({setFilm, countryCode, setCountryCode, countryName}:{
  setFilm:any,
  countryCode:string,
  setCountryCode:any,
  countryName:string
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
    <div className="welcome__container">
        <div className="header__title">
          <h1>Date App</h1>
        </div>
        <div className="header__search">
            <h3 className="welcome__input-text">Choose the film to get all its info!</h3>
          <Input query={query} setQuery={setQuery}/>
          {results.length ? (
            <div className="header__results">
              {results
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
        
        <div className="welcome__country">
          <div className="header__flag">
            {countryCode !== ''  ? <img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${countryCode}`}></img> : '' }
          
          </div >
          
          <CountryDropdown
          classes="heder__country-selector"
          value={countryCode}
          valueType="short"
          onChange={(val) => {
            console.log(val)
            setCountryCode(val)}} />
        
        </div>
    </div>
  );
};

export default Welcome;
