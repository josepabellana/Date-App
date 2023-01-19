import "./main.css";
import Search from "./Search";

const Main = ({ setFilm1, setFilm2 }:{ 
  setFilm1: any; 
  setFilm2: any;
}) => {
  const info = {
    title: 'Gladiator',
    backdrop_path: "hND7xAaxxBgaIspp9iMsaEXOSTz.jpg",
    poster_path: "ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  }
  return (
    <section className="container section">
      <div className="main__container">
        
        <img className="main__poster" src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}></img>
        
        <div className="main__information">
            <h2>{info.title}</h2>
        </div>
      </div>

      {/* <div className="main__cards">
        <div className="main__card">
          <Search setFilm={setFilm1} id={1} />
        </div>
        <div className="main__card">
          <Search setFilm={setFilm2} id={2} />
        </div>
      </div> */}
    </section>
  );
};

export default Main;
