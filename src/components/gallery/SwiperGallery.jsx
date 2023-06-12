import "./gallery.scss";
import React, { useRef, useState } from "react";
import ImgReseluta from "../../assets/images/iphone-mockup.png";
import CoverImgAboutMe from "../../assets/images/CoverImgAboutMe.png";
import ImgGraphic from "../../assets/images/Illustrations.png";
import LightUpCover from "../../assets/images/Lightup/LightUpCover.png.png";
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
            className="swiperslide-card"
            alt="colorfull picture of phone screens, shoeing how Reseluta (the website) will look like"
          />
          <div className="swiperslide-body">
            <h1 className="swiperslide-title">
              Graphic & Illustractions design
            </h1>
            <p className="swiperslide-subtitle">BA portfolio</p>
            <p className="card-info">
              Take a journey through the past, where you be able to see all of
              my best work during my bachelors degree.
            </p>
            <div className="swiperslide-btn-container">
              <a
                href="Design_Portfolio_Sarah Corberan.pdf"
                target="_blank"
                className="swiperslide-btn"
              >
                See more
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImgGraphic}
            alt="collage of Sarah's Illustrations with a lilac background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={LightUpCover}
            className="card-img"
            alt="skech of car with bold lettering and yellow background"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
