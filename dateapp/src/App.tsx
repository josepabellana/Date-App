import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Welcome from "./components/welcome/Welcome";
import Recommendations from "./components/recommendations/Recommendation";
import apiService from "./services/tmdb";

function App() {
  const [film, setFilm] = useState({});
  
  const [countryData,setCountryData] = useState<any>('')
  const [countryCode,setCountryCode] = useState<string>('');
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position:any) {
      fetch('https://api.opencagedata.com/geocode/v1/json'
    + '?'
    + 'key=' + 'f1bc3da3b93643d68df3ae8b411822a8'
    + '&q=' + encodeURIComponent(position.coords.latitude + ',' + position.coords.longitude)
    + '&pretty=1'
    + '&no_annotations=1')
   .then((response) => response.json())
   .then((data) => {
    setCountryData(data.results[0].components)
    setCountryCode(data.results[0].components.country_code.toUpperCase());
  })

   
    });
  },[])

  return (
    <>
    {Object.keys(film).length === 0 ? 
    <Welcome setFilm={setFilm} countryCode={countryCode} countryName={countryData.country}  setCountryCode={setCountryCode}/>
    :
    <div className="App">
      <Header setFilm={setFilm} countryCode={countryCode} countryName={countryData.country}  setCountryCode={setCountryCode}/>
      <Main film={film} countryCode={countryCode}/>
      <Recommendations film={film} setFilm={setFilm}/>
    </div>
  }
    </>
  );
}

export default App;
