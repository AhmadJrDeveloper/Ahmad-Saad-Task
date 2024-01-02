import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./HomeLanding.css";
import Woman from "../../assets/newimmy.png";
import Food from "../../assets/hiking.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomSwiper.css";

function HomeLanding() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      direction="horizontal" 
      slidesPerView="auto"
      spaceBetween={0}
      navigation
      pagination={false}
      scrollbar={{ draggable: true, hide: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      cssMode={true}
    >
      <SwiperSlide className="HomeLanding-Slide">
        <main className="HomeLanding-Main">
          <div className="HomeLanding-Titles">
            <p className="HomeLanding-Title">WORK</p>
            <p className="HomeLanding-SubTitle">
              Come Train With Me, We Will <br />
              Get You Gym Smart In No Time
            </p>
            <button className="HomeLanding-Button">Lets Go</button>
          </div>
          <img className="HomeLanding-Image" src={Woman} alt="" />
        </main>
      </SwiperSlide>
      <SwiperSlide className="HomeLanding-Slide">
        <main className="HomeLanding-Main">
          <div className="HomeLanding-Titles">
            <p className="HomeLanding-Title">WORK</p>
            <p className="HomeLanding-SubTitle">
              Come Train With Me, We Will <br />
              Get You Gym Smart In No Time
            </p>
            <button className="HomeLanding-Button">Lets Go</button>
          </div>
          <img className="HomeLanding-Image" src={Woman} alt="" />
        </main>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeLanding;
