import "./main.css";
import Search from "./Search";

const Main = ({ setFilm1, setFilm2 }:{ 
  setFilm1: any; 
  setFilm2: any;
}) => {

  return (
    <section className="main container section">
      <h1 className="section__title">DATE</h1>

      <div className="main__cards">
        <div className="main__card">
          <Search setFilm={setFilm1} id={1} />
        </div>
        <div className="main__card">
          <Search setFilm={setFilm2} id={2} />
        </div>
      </div>
    </section>
  );
};

export default Main;
