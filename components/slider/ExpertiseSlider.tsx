"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import ExpertiseCard from "../card/ExpertiseCard";
import { expertise } from "@/constant/constant";

const ExpertiseSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
        }}
        speed={1200}
        slidesPerGroup={5}
        navigation={true}
        spaceBetween={9}
        modules={[Grid, Navigation]}
        className="mySwiper h-[350px] w-full "
      >
        {expertise.map((item) => (
          <SwiperSlide key={item.id} className="w-fit min-w-fit">
            <ExpertiseCard title={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExpertiseSlider;
