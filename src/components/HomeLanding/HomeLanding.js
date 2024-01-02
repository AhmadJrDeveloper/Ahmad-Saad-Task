import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./HomeLanding.css";
import Woman from "../../assets/newimmy.png";
import Man from "../../assets/man.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomSwiper.css";

function HomeLanding() {
  const [selectedLink, setSelectedLink] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const category = location.pathname.substring(1);
    setSelectedLink(
      ["home", "recipes", "articles", "videos"].includes(category)
        ? category
        : "home"
    );
  }, [location.pathname]);

  const handleLinkClick = (category) => {
    setSelectedLink(category);
  };

  const handleHomeLandingClick = () => {
    navigate("/videos");
    handleLinkClick("videos");
  };
  const handleHomeLandingClick2 = () => {
    navigate("/recipes");
    handleLinkClick("recipes");
  };

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
            <button
              className="HomeLanding-Button"
              onClick={handleHomeLandingClick}
              style={{ color: selectedLink === "videos" ? "#D5DD5A" : "" }}
            >
              Lets Go
            </button>
          </div>
          <img className="HomeLanding-Image" src={Woman} alt="" />
        </main>
      </SwiperSlide>
      <SwiperSlide className="HomeLanding-Slide">
        <main className="HomeLanding-Main2">
          <div className="HomeLanding-Titles2">
            <p className="HomeLanding-Title2">DISCOVER RECIPES</p>
          </div>
          <img className="HomeLanding-Image2" src={Man} alt="" />
          <button
            className="HomeLanding-Button"
            onClick={handleHomeLandingClick2}
            style={{ color: selectedLink === "recipes" ? "#D5DD5A" : "" }}
          >
            Lets Go
          </button>{" "}
        </main>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeLanding;
