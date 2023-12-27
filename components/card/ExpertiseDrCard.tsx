/* eslint-disable @next/next/no-img-element */
import { Eye, MapPin, Phone, PhoneCall, Star } from "lucide-react";
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

const ExpertiseDrCard = ({
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
    <div className="flex flex-col lg:flex-row bg-white rounded-lg p-3">
      {/* info */}
      <div className="flex flex-col lg:w-8/12">
        <div className="flex items-start gap-3 ">
          <div className="flex flex-col gap-2">
            <img
              src="/images/dr/c00fe66de465abc794d13288b7c334c3123aff95.webp"
              alt="drPhoto"
              className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-full border border-[#0069D1]"
            />
            <div className="flex items-center gap-1 mx-auto mt-auto">
              <Eye className="w-3 h-3 mb-1.5" />
              <p className="text-sm">
                12<span className="">K</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col lg:flex-row items-start lg:gap-3 ">
              <div className="flex flex-col ">
                <p className="font-bold text-base">{title}</p>
                <p className="text-sm">{expertise}</p>
              </div>
              <div className="flex items-center">
                <StarBox />
                <p> امتیاز (کاربر 418 )</p>
              </div>
            </div>

            {/* visit type */}
            <div className="hidden lg:flex items-center gap-4 mb-1">
              <div className="flex items-center gap-2">
                <img
                  src="/images/typeOfVisit.svg"
                  alt="vist"
                  className="w-[25px] h-[25px] min-w-[25px] min-h-[25px]"
                />
                <p className="text-[#0069D1] text-sm font-semibold">
                  نوبت حضوری
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="flex items-center justify-center w-[25px] h-[25px] min-w-[25px] min-h-[25px] rounded-full bg-[#E5F2FF]">
                  <PhoneCall className=" w-3 h-3  text-[#0069D1] rotate-[150]" />
                </div>
                <p className="text-[#0069D1] text-sm font-semibold">
                  مشاوره تلفنی
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* visit type mobile */}
        <div className="lg:hidden flex items-center gap-4  mt-2">
          <div className="flex items-center gap-2">
            <img
              src="/images/typeOfVisit.svg"
              alt="vist"
              className="w-[25px] h-[25px] min-w-[25px] min-h-[25px]"
            />
            <p className="text-[#0069D1] text-sm font-semibold">نوبت حضوری</p>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex items-center justify-center w-[25px] h-[25px] min-w-[25px] min-h-[25px] rounded-full bg-[#E5F2FF]">
              <PhoneCall className=" w-3 h-3  text-[#0069D1] rotate-[150]" />
            </div>
            <p className="text-[#0069D1] text-sm font-semibold">مشاوره تلفنی</p>
          </div>
        </div>

        {/* address */}
        <div className="flex items-center gap-1 pt-3 lg:pt-8">
          <MapPin className="w-4 h-4 text-[#0069D1] " />
          <p className="line-clamp-1">
            <span className="text-black font-semibold ">{city}</span>،{" "}
            {location}
          </p>
        </div>
      </div>

      <div className="lg:w-4/12 w-full gap-4 lg:mr-auto lg:mt-auto">
        <div className="flex flex-col  items-center justify-end lg:w-fit lg:mr-auto lg:mt-auto">
          <p className="max-lg:hidden text-[#0069D1] text-sm">مشاهده پروفایل</p>
          <button className="bg-[#00BE43] w-full lg:w-[250px] rounded-lg py-2  text-white font-semibold mt-3 ">
            دریافت نوبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDrCard;
