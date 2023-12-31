"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { ChevronDown, User, X } from "lucide-react";
import Link from "next/link";
import { expertise } from "@/constant/constant";

interface props {
  setMobileMenu: any;
  mobileMenu: boolean;
}

const MobileMenu = ({ setMobileMenu, mobileMenu }: props) => {
  const [show, setShow] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);

  useEffect(() => {
    setShow(false);
    setShowExpertise(false);
  }, [mobileMenu]);

  return (
    <div className="flex flex-col  py-16 h-screen overflow-y-scroll pb-20 ">
      <div className="flex items-center justify-between px-6">
        <div onClick={() => setMobileMenu(false)}>
          <Logo blue />
        </div>
        <X
          onClick={() => setMobileMenu(false)}
          className="cursor-pointer w-5 h-5 "
        />
      </div>

      <button className="flex items-center justify-center gap-3 border-2 border-[#0067CD] rounded-lg my-9 w-[252px] h-[48px] text-[#0067CD] px-6 mx-auto min-h-[48px]">
        <User />
        <p>ورود / عضویت</p>
      </button>

      <div className="flex flex-col">
        <Link
          href={"/search/expertise"}
          onClick={() => setMobileMenu(false)}
          className=" border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm">نوبت‌دهی</p>
        </Link>
        <Link
          href={"/evisit"}
          onClick={() => setMobileMenu(false)}
          className=" border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm">مشاوره تلفنی</p>
        </Link>
        <Link
          href={"/"}
          onClick={() => {
            setShow(!show);
            setShowExpertise(false);
          }}
          className={` border-t py-3 flex items-center text-[#0067CD] ${
            show ? "hover:bg-[#E6F3FF]" : "hover:bg-[#FAFCFE]"
          }`}
        >
          <p className="px-6 text-sm ">تخصص‌ها</p>
          <ChevronDown
            className={`w-4 h-4 ml-6  mr-auto  transition-all ${
              show && "rotate-180"
            }`}
          />
        </Link>
        {show && (
          <Link
            href={"/"}
            onClick={() => setShowExpertise(!showExpertise)}
            className={`border-t py-3 flex items-center text-[#0067CD] ${
              show && "bg-[#F4FAFF] hover:bg-[#E6F3FF]"
            }`}
          >
            <p className="px-6 text-sm ">لیست تخصص‌ها</p>
            <ChevronDown
              className={`w-4 h-4 ml-6 mr-auto transition-all ${
                showExpertise && "rotate-180"
              }`}
            />
          </Link>
        )}
        {showExpertise && (
          <Link
            href={"/"}
            className={`border-t py-3 flex items-start gap-6 text-[#0067CD]  flex-col bg-[#E6F3FF]`}
          >
            {expertise.map((item) => (
              <Link
                href={`/search/expertise/${item.id}`}
                onClick={() => setMobileMenu(false)}
                key={item.id}
                className="px-6 text-sm "
              >
                {item.name}
              </Link>
            ))}
          </Link>
        )}
        <Link
          href={"/"}
          onClick={() => setMobileMenu(false)}
          className=" border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm">مراکز درمانی</p>
        </Link>
        <Link
          href={"/"}
          onClick={() => setMobileMenu(false)}
          className=" border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm">خدمات پزشکی در محل</p>
        </Link>
        <Link
          href={"/"}
          onClick={() => setMobileMenu(false)}
          className=" border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm">مجله سلامت</p>
        </Link>
        <Link
          href={"/"}
          onClick={() => setMobileMenu(false)}
          className="border-b border-t py-3 bg-[#FAFCFE]"
        >
          <p className="px-6 text-sm text-[#1AAB49]">برای پزشکان</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
