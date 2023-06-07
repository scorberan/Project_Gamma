import "./gallery.scss";
import React, { useRef, useState } from "react";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
import 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
//import GraphicIllustrations from "../../assets/images/Illuustrations.png";
//import ImgReseluta from "../../assets/images/iphone-mockup.png";

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
        <SwiperSlide>About me</SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgReseluta}
            alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
          />
        </SwiperSlide>
        <SwiperSlide>Graphic</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
