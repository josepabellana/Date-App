import "./main.css";
import Search from "./Search";

const Main = () => {
  return (
    <section className="main__container container grid">
      <h1 className="section__title">DATE</h1>
      <div className="main__films">
        <div className="main__film">
          <Search />
        </div>
        <div className="main__film">
          <Search />
        </div>
      </div>
      {/* <button className="main__discover">Show results</button> */}
    </section>
  );
};

export default Main;
