/* eslint-disable @next/next/no-img-element */
import StarBox from "@/components/StarBox";
import View from "@/components/View";
import DrInfo from "@/components/dr-centerMedical-InfoPage/DrInfo";
import Visit from "@/components/dr-centerMedical-InfoPage/Visit";
import { drInfo } from "@/constant/constant";
import { CheckCheck, MapPin, Share2, User2 } from "lucide-react";

const page = ({ params }: { params: any }) => {
  const dr = drInfo.filter((dr) => dr.id === params.id);

  return (
    <div className="main-w flex w-full  gap-3 pb-20">
      {/* 1 */}
      <div className="w-full  flex flex-col gap-3">
        {/* image and name */}
        <div className="w-full h-fit bg-white rounded-lg p-5 border border-[#ECEFF1]">
          {/* share , view */}
          <div className="flex items-center justify-between  w-full h-fit">
            <div className="flex items-center w-full gap-1 text-[#0069D1] cursor-pointer">
              <Share2 className="w-4 h-4" />
              <p className="font-semibold">اشتراک گذاری</p>
            </div>

            <div className="">
              <View />
            </div>
          </div>

          <div className="flex flex-col  items-center gap-2 justify-center -mt-5">
            <img
              src={dr[0].img}
              alt=""
              className="rounded-full border border-[#0069D1] w-[170px] h-[170px] min-w-[170px] min-h-[170px]"
            />

            <div className="flex items-center gap-1">
              <CheckCheck className="w-5 h-5 text-[#00BE43] mb-1" />
              <p className="text-lg  font-extrabold">{dr[0].title}</p>
            </div>

            <p className="font-[600]">{dr[0].expertise}</p>

            <div className="flex items-center gap-1">
              <MapPin className="w-5 h-5 text-[#0069D1] mb-1" />
              <p className="font-[600]">{dr[0].city}</p>
            </div>

            <div className="flex items-center max-lg:justify-around px-8 py-2 bg-[#F9F9F9] rounded-lg gap-4 w-full lg:w-fit">
              <div className="flex flex-col items-center ">
                <p>15</p>
                <p>تعداد نظرات</p>
              </div>

              <div className="h-[30px] w-[1px] min-h-[100%] min-w-[2px] bg-[#ECEFF1]"></div>

              <div className="flex flex-col items-center ">
                <StarBox />
                <p>میانگین امتیازات</p>
              </div>
            </div>
          </div>
        </div>

        {/* visit */}
        <div className="lg:hidden ">
          <Visit />
        </div>

        {/* dr info */}
        <DrInfo item={dr} dr />
      </div>

      {/* 2 */}
      <div className="max-lg:hidden w-full h-screen">
        <Visit />
      </div>
    </div>
  );
};

export default page;
