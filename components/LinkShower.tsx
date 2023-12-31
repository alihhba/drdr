"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface props {
  children: React.ReactNode;
  title: string;
}

const LinkShower = ({ children, title }: props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col ">
      {/* title */}
      <div
        className="flex items-center justify-between cursor-pointer p-4 "
        onClick={() => setShow(!show)}
      >
        <p className="text-sm font-semibold">{title}</p>
        <div className="flex items-center  gap-1 text-[#0067CD] h-full font-bold text-sm ">
          {show ? <p>بستن</p> : <p>مشاهده</p>}
          <ChevronDown className={`w-3 h-3 transition-all ${show && 'rotate-180 transition-all'}`}/>
        </div>
      </div>

      {/* main */}
      {show && (
        <div
          className={`grid grid-cols-1 md:grid-cols-4  gap-1 px-4 pb-4   transition-all`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LinkShower;
