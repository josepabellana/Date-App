import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Recommendations from "./components/recommendations/Recommendation";
import apiService from "./services/tmdb";

function App() {
  const [film1, setFilm1] = useState({});
  const [film2, setFilm2] = useState({});
  const [recommendations, setRecommendations] = useState<any>([])
  useEffect(() => {
    (async function activateRecommendation() {
      console.log(film1, film2);
      if (Object.keys(film1).length !== 0 && Object.keys(film2).length !== 0) {
        const response = await apiService.searchRecommendationsTwo(film1,film2);

        console.log('recommended', response);
        setRecommendations((old:any) => [...response]);
      }else if (Object.keys(film1).length !== 0) {
        const response = await apiService.searchRecommendations(film1);
        console.log('recommended', response);
        setRecommendations((old:any) => [...response.results]);
      }
    })()
  }, [film1, film2]);
  return (
    <div className="App">
      <Header />
      <Main setFilm1={setFilm1} setFilm2={setFilm2} />
      <Recommendations recommendations={recommendations}/>
    </div>
  );
}

export default App;
