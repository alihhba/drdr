"use client";
import { User } from "lucide-react";
import React, { useState } from "react";

const Visit = () => {
  const [evisit, setEvisit] = useState(true);

  return (
    <div className="h-fit  p-5 w-full  bg-white rounded-lg border border-[##A9A9A9] ">
      <div className="flex items-center gap-2">
        <User className="w-6 h-6" />
        <p className="font-bold">دریافت نوبت</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 mt-3 w-full">
        <button
          onClick={() => setEvisit(false)}
          className={`flex items-center gap-2 p-2 lg:p-3 rounded-lg border w-full group ${
            evisit ? "border-[#A9A9A9] " : "border-[#0069D1] bg-[#E6F3FF]"
          }`}
        >
          <div
            className={`w-6 h-6 min-h-6 min-w-6  border-2 rounded-full  transition-all ${
              evisit
                ? "border-[#A9A9A9] group-hover:bg-[#E6F3FF]"
                : "border-[#0069D1] border-spacing  p-0.5 "
            }`}
          >
            {!evisit && (
              <div className="bg-[#0069D1] w-full h-full rounded-full"></div>
            )}
          </div>
          <p
            className={`text-sm font-semibold ${!evisit && "text-[#0069D1]"} `}
          >
            ویزیت در مطب
          </p>
        </button>
        <button
          onClick={() => setEvisit(true)}
          className={`flex items-center gap-2 p-2 lg:p-3 rounded-lg border w-full group ${
            !evisit ? "border-[#A9A9A9] " : "border-[#0069D1] bg-[#E6F3FF]"
          }`}
        >
          <div
            className={`w-6 h-6 min-h-6 min-w-6  border-2 rounded-full  transition-all ${
              !evisit
                ? "border-[#A9A9A9] group-hover:bg-[#E6F3FF]"
                : "border-[#0069D1] border-spacing  p-0.5 "
            }`}
          >
            {evisit && (
              <div className="bg-[#0069D1] w-full h-full rounded-full"></div>
            )}
          </div>
          <p className={`text-sm font-semibold ${evisit && "text-[#0069D1]"} `}>
            مشاوره تلفنی
          </p>
        </button>
      </div>

      <div className="mt-2">
        {evisit && (
          <div className="flex items-center flex-col gap-2">
            <div className="flex items-center gap-2 flex-col w-full">
              <div className="flex items-center cursor-pointer font-semibold text-sm gap-2 p-2 lg:p-3 rounded-lg border w-full border-[#A9A9A9]">
                ویزیت
              </div>
            </div>
          </div>
        )}

        {!evisit && (
          <div className="flex items-center flex-col gap-2">
            <div className="flex items-center gap-2 flex-col w-full">
              <div className="flex items-center cursor-pointer font-semibold text-sm gap-2 p-2 lg:p-3 rounded-lg border w-full border-[#A9A9A9]">
                مطب فرزان نقشوار
              </div>
              <div className="flex items-center cursor-pointer font-semibold text-sm gap-2 p-2 lg:p-3 rounded-lg border w-full border-[#A9A9A9]">
                ویزیت
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visit;
