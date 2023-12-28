"use client";
import React from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import DrCard from "../card/DrCard";
import { drInfo } from "@/constant/constant";

interface props {
  items: {
    evisit?: boolean | undefined;
    espanser?: boolean | undefined;
    title: string;
    img: string;
    expertise: string;
    city: string;
    location: string;
    time: string;
    firstTime: string;
    answerTime: string;
    id: string;
  }[];
}

const DrSlider = ({ items }: props) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={4}
      slidesPerGroup={4}
      speed={1200}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-[330px]"
    >
      {items
        .filter((dr) => dr.evisit === false)
        .map((dr, i) => (
          <SwiperSlide className="min-w-min" key={i}>
            <DrCard
              title={dr.title}
              answerTime={dr.answerTime}
              city={dr.city}
              expertise={dr.expertise}
              firstTime={dr.firstTime}
              img={dr.img}
              location={dr.location}
              time={dr.time}
              espanser={dr.espanser}
              evisit={dr.evisit}
              key={dr.id}
              id={dr.id}
            />
          </SwiperSlide>
        ))}
    </Swiper>

  );
};

export default DrSlider;
