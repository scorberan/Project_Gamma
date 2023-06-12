import "./gallery.scss";
import React, { useRef, useState } from "react";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";
import ImgGraphic from "../../assets/images/Illustrations.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

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
          {" "}
          <img
            src={CoverImgAboutMe}
            className="card-img"
            alt="mockups of the about me website in different devices"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgReseluta}
            alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgGraphic}
            alt="collage of Sarah's Illustrations with a lilac background"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
