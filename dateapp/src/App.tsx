import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Recommendations from "./components/recommendations/Recommendation";
import apiService from "./services/tmdb";

function App() {
  const [film, setFilm] = useState({});
  


  return (
    <div className="App">
      <Header setFilm={setFilm}/>
      <Main  />
    </div>
  );
}

export default App;
