import { useEffect, useState } from "react";
import "./main.css";
import apiService from "../../services/tmdb";



const Main = ({ film }:{ 
  film:any,
}) => {
  const [cast, setCast] = useState<any>([])
  const [watchDetails, setWatchDetails] = useState<any>({})
  useEffect(()=>{
    async function fetchData(){
      //Where to watch
      const response = await apiService.whereToWatchDetails(film.id);
      setWatchDetails(response.results);
      console.log(response.results)
      //cast
      const castResponse = await apiService.getCast(film.id);
      setCast(castResponse.cast);
      console.log(castResponse.cast)
    }
    if(film.id) fetchData();
  },[film])
  
  return (
    <section className="container section">
      {film.id ? <div className="main__container">
        
        <img className="main__poster" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}></img>
        
        <div className="main__information">
            <h2>{film.title}</h2>
            <p>{film.release_date} · {film.genres.map((genre:any)=> <>{genre.name}, </>)} · {~~(film.runtime/60)}h {(film.runtime-~~(film.runtime/60)*60)%60}m</p>
            {watchDetails.ES && watchDetails.ES.flatrate && Object.keys(watchDetails).length > 0 ? 
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
            <h4>Overview</h4>
            <p>{film.overview}</p>

            <div className="film__statistics">
              <h4>Revenue: ${film.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
              <h4>Budget: ${film.budget.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
            </div>
            {cast.length > 0 ? 
              <>
                <h4>Cast</h4>
                <div className="main__toWatch">
                  {cast.slice(0,10).map((info:any)=>{
                  return (
                    <div>
                      <img className="main__toWatch-logo" src={`https://image.tmdb.org/t/p/original${info.profile_path}`}/>
                    </div>
                  )})}
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
