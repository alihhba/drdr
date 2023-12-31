"use client";
import { ChevronLeft, User } from "lucide-react";
import React, { useState } from "react";

const VisitCenterMedical = () => {
  return (
    <div className="h-fit  p-5 w-full  bg-white rounded-lg border border-[##A9A9A9] ">
      <div className="flex items-center gap-2">
        <User className="w-6 h-6" />
        <p className="font-bold">دریافت نوبت</p>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <button
          className={`flex items-center justify-between gap-2 p-2 lg:p-3 rounded-lg border w-full group border-[#A9A9A9`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 min-h-6 min-w-6  border-2 rounded-full  transition-all
            border-[#A9A9A9] group-hover:bg-[#E6F3FF]`}
            ></div>
            <p className={`text-sm font-semibold  `}>ویزیت در مطب</p>
          </div>

          <div>
            <ChevronLeft className="w-5 h-5 text-[#A9A9A9]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VisitCenterMedical;
