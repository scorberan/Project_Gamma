import "./gallery.scss";
import React, { useRef, useState } from "react";
import LightUpProject from "../../views/projects/LightUpProject";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ResolutaProject from "../../views/projects/ResolutaProject";
import AboutMeProject from "../../views/projects/AboutmeProject";
import { FreeMode, Pagination } from "swiper";
import GraphicPortfolio from "../../views/projects/GraphicPortfolio";
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={95}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ResolutaProject sliderMode />
        </SwiperSlide>
        <SwiperSlide>
          <GraphicPortfolio sliderMode></GraphicPortfolio>
        </SwiperSlide>
        <SwiperSlide>
          <LightUpProject sliderMode></LightUpProject>
        </SwiperSlide>
        <SwiperSlide>
          <AboutMeProject sliderMode></AboutMeProject>
          <LightUpProject sliderMode></LightUpProject>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
