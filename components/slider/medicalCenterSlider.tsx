"use client";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MedicalCenterCard from "../card/MedicalCenterCard";

interface props {
  items: {
    title: string;
    img: string;
    city: string;
    location: string;
    id: string;
  }[];
}

const MedicalCenterSlider = ({ items }: props) => {
  return (
    <Swiper
      // install Swiper modules
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
      {items.map((it, i) => (
        <SwiperSlide className="min-w-min" key={i}>
          <MedicalCenterCard
            key={i}
            title={it.title}
            city={it.city}
            img={it.img}
            location={it.location}
            id={it.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MedicalCenterSlider;
