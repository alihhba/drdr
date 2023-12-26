/* eslint-disable @next/next/no-img-element */
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import StarBox from "../StarBox";
import EspanserBox from "../EspanserBox";

interface props {
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
}

const DrCard = ({
  evisit,
  espanser,
  answerTime,
  city,
  expertise,
  firstTime,
  img,
  location,
  time,
  title,
}: props) => {
  return (
    <div
      className={`relative flex flex-col w-full min-w-[250px] lg:w-fit h-fit  border rounded-lg  p-4 ${
        evisit ? "bg-[#F4FDF7] border-[#D2F8DE]" : "border-[#E7E7E7]"
      }`}
    >
      {/* star */}
      <div
        className={`absolute top-4 left-4 ${
          evisit && "bg-white px-2 rounded-full"
        }`}
      >
        <StarBox />
      </div>

      {/* espanser */}
      {espanser && (
        <div className="absolute top-4 right-4 ">
          <EspanserBox />
        </div>
      )}

      {/* img */}
      <div className="relative w-fit mx-auto">
        <img
          src={img}
          alt="drPhoto"
          className="rounded-full w-[50px] h-[50px] mx-auto min-w-[50px] min-h-[50px] "
        />

        {evisit && (
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#22DD5E] rounded-full border-2 border-white"></div>
        )}
      </div>

      {/* title */}
      <p className="mx-auto mt-3 line-clamp-1">{title}</p>
      <p className="mx-auto text-xs mt-2 text-[#7E7E7E] line-clamp-1">
        {expertise}
      </p>

      {/* address */}
      <div className="flex items-center gap-1">
        <MapPin className="w-8 h-8 text-[#7E7E7E]" />
        <p className="line-clamp-1 text-[#7E7E7E] text-sm">
          <span className="text-black">{city}</span>،{location}
        </p>
      </div>

      {!evisit && (
        <div className="flex items-center justify-between mt-3 text-[10px] text-[#7E7E7E]">
          <p>میانگین زمان انتظار</p>
          <p className="text-sm">{time}</p>
        </div>
      )}

      {!evisit && (
        <div className="flex items-center justify-between text-[10px] text-[#7E7E7E] mt-1">
          <p>اولین نوبت خالی</p>
          <p className="text-sm">{firstTime}</p>
        </div>
      )}

      {evisit && (
        <div className="flex items-center justify-between mt-3 text-[10px] text-[#7E7E7E]">
          <p>زمان پاسخگویی</p>
          <p className="text-sm">{answerTime}</p>
        </div>
      )}

      <div className="mt-auto w-full">
        <button
          className={`flex items-center justify-center w-full rounded-lg ${
            evisit
              ? "border-2 border-[#1AAB49]  text-[#1AAB49] shadow-lg"
              : "bg-[#0067CD] hover:bg-[#004e9b] text-white "
          } mt-4 py-2  `}
        >
          {evisit ? "شروع مشاوره" : "دریافت نوبت"}
        </button>
      </div>
    </div>
  );
};

export default DrCard;
