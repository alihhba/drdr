/* eslint-disable @next/next/no-img-element */
import { MapPin } from "lucide-react";
import React from "react";

interface props {
  name: string;
  city: string;
  location: string;
  img: string;
}

const MedicalCenterCard = ({ city, img, location, name }: props) => {
  return (
    <div className="flex flex-col w-[270px] h-fit min-w-[270px]">
      {/* image */}
      <img
        src={img}
        alt="medicalCenter"
        className="w-[140px] h-[140px] mx-auto"
      />

      <div className="flex flex-col items-center justify-center border border-[#C4CED4] p-3 rounded-lg">
        <p className="line-clamp-1 text-lg">{name}</p>

        <div className="flex gap-1  items-center ">
          <MapPin className="w-7 h-7 text-[#7E7E7E]" />
          <p className="line-clamp-1 text-[#7E7E7E] text-sm">
            <span className="text-black">{city}</span>، {location}
          </p>
        </div>
        <button className="py-2 border border-[#0067CD] rounded-lg w-full shadow-sm text-[#0067CD] mt-4">
          مشاهده خدمات
        </button>
      </div>
    </div>
  );
};

export default MedicalCenterCard;
