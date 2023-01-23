import React, { useEffect,useState } from "react";
import "./recommendation.css";
import apiService from "../../services/tmdb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation, Pagination } from "swiper";

const Recommendations = ({ film, setFilm}:{
  
  film: any ,
  setFilm:any,
  }) => {

  const [recommendations, setRecommendations] = useState<any>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(()=>{
    async function fetchData(){
      //recommendations
      const response = await apiService.getRecommendations(film.id);
      setRecommendations(response.results);
      console.log(response.results)
    
    }
    if(film.id) fetchData();
  },[film])
  useEffect(() => {
    async function fetchDetails(id:number){
      const response = await apiService.searchMovieDetails(id);
      setFilm(response);
    }
    if (selected !== null) fetchDetails(selected.id);      
  }, [selected]);

  return (
    <section className="recommendation__container container">
      {film.id ? <Swiper
        slidesPerView={7}
        spaceBetween={20}
        slidesPerGroup={7}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        modules={[Navigation,Pagination]}
        className="swiper mySwiper"
      >
        {recommendations.map((movie: any) => (
          <SwiperSlide >
            <img
              onClick={()=>setSelected(movie)}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="recommendation__logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    :
    ''
    }
    </section>
  );
};

export default Recommendations;
