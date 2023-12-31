"use client";
/* eslint-disable @next/next/no-img-element */
import { MapPin, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import StarBox from "../StarBox";
import View from "../View";

interface props {
  evisit?: boolean | undefined;
  espanser?: boolean | undefined;
  title: string;
  img: string;
  expertise?: string;
  city: string;
  location: string;
  time?: string;
  firstTime?: string;
  answerTime?: string;
  id: string;
  dr?: boolean;
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
  id,
  dr
}: props) => {
  const router = useRouter();

  return (
    <div
      className={`relative flex flex-col lg:flex-row bg-white  p-3 ${
        espanser
          ? " lg:rounded-r-lg max-lg:border-t-2 lg:border-l-2 border-[#FFB300] shadow-lg"
          : "rounded-lg"
      }`}
    >
      {espanser && (
        <div className="absolute lg:top-2 top-0 left-2 lg:left-0 text-xs text-[#FFB300] border border-[#FFB300] p-1 rounded-b-md lg:rounded-r-md">
          <p>اسپانسر</p>
        </div>
      )}
      {/* info */}
      <div className="flex flex-col lg:w-8/12">
        <div className="flex items-start gap-3 ">
          <div className="flex flex-col gap-2">
            <img
              onClick={() => {
                dr
                  ? router.push(`/dr/${id}/${title.split(" ").join("-")}`)
                  : router.push(
                      `/medical-centers/${id}/${title.split(" ").join("-")}`
                    );
              }}
              src={img}
              alt="drPhoto"
              className="w-[70px] h-[70px] min-w-[70px] min-h-[70px] rounded-full border border-[#0069D1] cursor-pointer"
            />
            <View />
          </div>

          <div
            className={`flex flex-col justify-between  ${
              dr ? "h-full" : "h-fit gap-2"
            }`}
          >
            <div
              className={`flex flex-col lg:flex-row  lg:gap-3 ${
                dr ? "items-start" : "mt-3"
              } `}
            >
              <div className="flex flex-col ">
                <p
                  onClick={() => {
                    dr
                      ? router.push(`/dr/${id}/${title.split(" ").join("-")}`)
                      : router.push(
                          `/medical-centers/${id}/${title.split(" ").join("-")}`
                        );
                  }}
                  className="font-bold text-base cursor-pointer"
                >
                  {title}
                </p>
                {dr && <p className="text-sm">{expertise}</p>}
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
          <p
            onClick={() => {
              dr
                ? router.push(`/dr/${id}/${title.split(" ").join("-")}`)
                : router.push(
                    `/medical-centers/${id}/${title.split(" ").join("-")}`
                  );
            }}
            className="max-lg:hidden text-[#0069D1] text-sm cursor-pointer"
          >
            مشاهده پروفایل
          </p>
          <button className="bg-[#00BE43] w-full lg:w-[250px] rounded-lg py-2  text-white font-semibold mt-3 ">
            دریافت نوبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDrCard;
