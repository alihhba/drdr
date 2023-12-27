/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#003365] lg:gap-[100px] h-fit flex flex-col lg:flex-row lg:py-[69px] lg:px-[40px] px-[40px] py-[20px] gap-[30px] text-white">
      {/* 1 */}
      <div className="flex flex-col gap-8 max-w-[344px]">
        {/* img */}
        <Logo />

        <div className="flex flex-col gap-2 ">
          <p>پاسخگویی ۷ روز هفته از ساعت ۹ صبح تا ۱ بامداد</p>
          <div className="flex items-center gap-2">
            <img
              src="/images/headphone-2.svg "
              alt="headphone"
              className="w-6 h-6"
            />
            <p>پشتیبانی</p>
            <p> ۴۲۱۹۸۰۰۰ (۰۲۱)</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <p>ما را در شبکه‌های اجتماعی دنبال کنید:</p>
          <div className="flex items-center gap-6">
            <img src="/images/telegram.svg " alt="frame" />
            <img src="/images/linkedin.svg " alt="frame" />
            <img src="/images/instagram.svg " alt="frame" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2 ">
            <img
              src="/images/location.svg"
              alt="location"
              className="w-6 h-6"
            />
            <div className="flex flex-col  items-start gap-2">
              <p>
                تهران، میدان آرژانتین، خیابان بیهقی، خیابان شانزدهم شرقی، پلاک
                ۲۸
              </p>
              <p>کدپستی: ۱۵۱۵۶۷۴۴۱۱</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href={"/"}>قوانین و مقررات</Link>
          <Link href={"/"}>حفظ حریم شخصی</Link>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col gap-2">
        <p className="text-[#67B4FF] text-[18px]">لینک‌های مفید</p>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full">
          <Link href={"/"}>درباره ما</Link>
          <Link href={"/"} className="w-full">
            ورود و ثبت نام پزشکان
          </Link>
          <Link href={"/"} className="w-full">
            ورود و ثبت نام بیماران
          </Link>
          <Link href={"/"}>مجله سلامت</Link>
          <Link href={"/"}>لیست تخصص‌ها</Link>
          <Link href={"/"}>مشاوره تلفنی</Link>
          <Link href={"/"}>لیست مراکز درمانی</Link>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col gap-2 max-w-[300px] lg:mr-[100px]">
        <p className="text-[#67B4FF] text-[18px]">گواهینامه‌ها </p>

        <div className="flex items-center gap-2 lg:mb-[32px]">
          <div className="bg-[#97CBFF] rounded-lg p-2 w-[70px] h-[70px]">
            <img src="/images/image 19.png" alt="footer" />
          </div>
          <div className="bg-[#97CBFF] rounded-lg p-2 w-[70px] h-[70px]">
            <img src="/images/image 20.png" alt="footer" />
          </div>
          <div className="bg-[#97CBFF] rounded-lg p-2 w-[70px] h-[70px]">
            <img src="/images/image 21.png" alt="footer" />
          </div>
          <div className="bg-[#97CBFF] rounded-lg p-2 w-[70px] h-[70px]">
            <img src="/images/image 22.png" alt="footer" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#67B4FF] text-[18px]">جوایز و افتخارات </p>
          <p>
            برنده سه تندیس برترین وب سایت سلامت الکترونیک کشور در جشنواره وب و
            موبایل ایران
          </p>
        </div>

        <div className="mt-[24px]">
          <img src="/images/image 23.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
