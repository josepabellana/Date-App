import React, { useEffect } from "react";
import "./recommendation.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation } from "swiper";

const Recommendations = ({ recommendations }: { recommendations: any }) => {
  useEffect(() => {
    console.log(recommendations);
  }, [recommendations]);
  return (
    <section className="recommendation__container container">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        modules={[Navigation]}
        className="swiper2 mySwiper"
      >
        {recommendations.map((movie: any) => (
          <SwiperSlide >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="recommendation__logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Recommendations;
