/* eslint-disable @next/next/no-img-element */
import { MapPin } from "lucide-react";
import React from "react";
import "@/styles/components/card/medical-center-card.css";

interface props {
  title: string;
  city: string;
  location: string;
  img: string;
  id: string;
}

const MedicalCenterCard = ({ city, img, location, title, id }: props) => {
  return (
    <div className="mc-main">
      {/* image */}
      <img src={img} alt="medicalCenter" className="mc-img" />

      <div className="mc-container">
        <p className="mc-title">{title}</p>

        <div className="flex gap-1  items-center">
          <MapPin className="w-7 h-7 text-[#7E7E7E]" />
          <p className="mc-address">
            <span className="text-black">{city}</span>، {location}
          </p>
        </div>
        <button className="mc-btn">مشاهده خدمات</button>
      </div>
    </div>
  );
};

export default MedicalCenterCard;
