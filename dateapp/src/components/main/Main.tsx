import "./main.css";
import Search from "./Search";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Main = ({ setFilm1, setFilm2 }: { setFilm1: any; setFilm2: any }) => {

  return (
    <section className="main container section">
      <h1 className="section__title">DATE</h1>
      <span className="section__subtitle">Choose your film</span>

      <Swiper
        className="swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={true}
        
      >
        <SwiperSlide className="swiper-slide">
          <Search setFilm={setFilm1} />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Search setFilm={setFilm2} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Main;
