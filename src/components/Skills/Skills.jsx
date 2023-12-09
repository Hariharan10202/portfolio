import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { skills } from "../../projects";

export default function Skills() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiperContainer">
      <Swiper
        autoplay={{ delay: 1000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, FreeMode, Thumbs, Pagination]}
        className="massSwiper"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div
              style={{
                background: `linear-gradient(
                  45deg,
                  rgba(5, 15, 29, 0.9475140397956058) 13%,
                  rgba(5, 15, 29, 0.8130602582830007) 43%,
                  rgba(255, 255, 255, 0) 100%
                ),
                url(${skill.Image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                filter: "brightness(90%)",
              }}
              className="swiperContentContainer"
            >
              <h1>{skill.name}</h1>
              <div>
                {skill.skills.map((concept) => (
                  <ul key={concept}>
                    <li>{concept}</li>
                  </ul>
                ))}
              </div>
              <p></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          410: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          520: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        }}
        centeredSlides={true}
        loop
        autoplay={{ delay: 1000 }}
        modules={[Autoplay, Navigation, FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="react.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="nextjs.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="tailwind.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="mongodb.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="nodejs.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="typescript.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="stycom.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="nextauth.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperImgContainer">
            <img src="firebase.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
