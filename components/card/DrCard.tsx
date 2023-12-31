/* eslint-disable @next/next/no-img-element */
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import StarBox from "../StarBox";
import EspanserBox from "../EspanserBox";
import Link from "next/link";
import "@/styles/components/card/dr-card.css";

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
  id: string;
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
  id,
}: props) => {
  return (
    <Link
      href={`/dr/${id}/${title.split(" ").join("-")}`}
      className={`container2 ${
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
        <div className="dr-box-espanse">
          <EspanserBox />
        </div>
      )}

      {/* img */}
      <div className="relative w-fit mx-auto">
        <img src={img} alt="drPhoto" className="dr-box-image" />

        {evisit && <div className="evisit-div"></div>}
      </div>

      {/* title */}
      <p className="dr-card-title">{title}</p>
      <p className="dr-card-expertise">{expertise}</p>

      {/* address */}
      <div className="dr-card-address-box">
        <MapPin className="w-8 h-8 text-[#7E7E7E]" />
        <p className="dr-card-address-box-text">
          <span className="text-black">{city}</span>،{location}
        </p>
      </div>

      {!evisit && (
        <div className="dr-card-box-time1">
          <p>میانگین زمان انتظار</p>
          <p className="text-sm">{time}</p>
        </div>
      )}

      {!evisit && (
        <div className="dr-card-box-time2">
          <p>اولین نوبت خالی</p>
          <p className="text-sm">{firstTime}</p>
        </div>
      )}

      {evisit && (
        <div className="dr-card-box-time3">
          <p>زمان پاسخگویی</p>
          <p className="text-sm">{answerTime}</p>
        </div>
      )}

      <div className="mt-auto w-full">
        <button
          className={`dr-card-btn ${
            evisit
              ? "border-2 border-[#1AAB49]  text-[#1AAB49] shadow-lg"
              : "bg-[#0067CD] hover:bg-[#004e9b] text-white "
          } mt-4 py-2  `}
        >
          {evisit ? "شروع مشاوره" : "دریافت نوبت"}
        </button>
      </div>
    </Link>
  );
};

export default DrCard;
