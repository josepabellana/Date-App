import { useEffect, useState } from "react";
import "./main.css";
import apiService from "../../services/tmdb";



const Main = ({ film }:{ 
  film:any,
}) => {
  const [watchDetails, setWatchDetails] = useState<any>({})
  useEffect(()=>{
    async function fetchWhereToWatchDetails(){
      const response = await apiService.whereToWatchDetails(film.id);
      setWatchDetails(response.results);
      console.log(response.results)
    }
    if(film.id) fetchWhereToWatchDetails();
  },[film])
  
  return (
    <section className="container section">
      {film.id ? <div className="main__container">
        
        <img className="main__poster" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}></img>
        
        <div className="main__information">
            <h2>{film.title}</h2>
            <p>{film.release_date} · {film.genres.map((genre:any)=> <>{genre.name}, </>)} · {~~(film.runtime/60)}h {(film.runtime-~~(film.runtime/60)*60)%60}m</p>
            {Object.keys(watchDetails).length > 0 ? 
              <>
                <h4>Where to Watch</h4>
                <div className="main__toWatch">
                  {watchDetails.ES.flatrate.map((info:any)=>{
                  return <img className="main__toWatch-logo" src={`https://image.tmdb.org/t/p/original${info.logo_path}`}></img>
                  })}
                </div>
              </>
              :
              ''
            }
        </div>
      </div>
      :
      ''}
    </section>
  );
};

export default Main;
