/* eslint-disable @next/next/no-img-element */
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface props {
  title: string;
  prevTitle?: string;
  nextTitle?: string;
}

const ExpertiseInfoCard = ({ title, nextTitle, prevTitle }: props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-5 border-b-2 py-5 border-[#DFDFDF]">
      <div className="flex flex-col gap-2 lg:w-8/12">
        <p className="text-base font-extrabold ">
          {prevTitle} {title} {nextTitle}
        </p>
        <p className="line-clamp-2">
          برای بیماری‌های زنان مانند تنبلی تخمدان، مشکلات قاعدگی، یائسگی و... به
          پزشک زنان مراجعه می‌شود. متخصصان زنان و زایمان روش‌های تشخیصی و درمانی
          مختلف برای مشکلات زنان ارائه می‌کنند. برای دریافت نوبت متخصص زنان و
          زایمان می‌توانید از سایت دکتردکتر نوبت اینترنتی بگیرید.
        </p>
      </div>

      <div className="flex flex-row lg:flex-col justify-start  lg:w-4/12 items-center max-lg:mt-4">
        {/* images */}
        <div className="flex">
          <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full min-w-[55px] min-h-[55px] bg-white">
            <img
              src="/images/dr/c00fe66de465abc794d13288b7c334c3123aff95.webp"
              alt="drProfile"
              className="w-[50px] h-[50px] rounded-full min-w-[50px] min-h-[50px] border border-[#0069D1] "
            />
          </div>

          <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full min-w-[55px] min-h-[55px] bg-white  -mr-2">
            <img
              src="/images/dr/c00fe66de465abc794d13288b7c334c3123aff95.webp"
              alt="drProfile"
              className="w-[50px] h-[50px] rounded-full min-w-[50px] min-h-[50px] border border-[#0069D1] "
            />
          </div>

          <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full min-w-[55px] min-h-[55px] bg-white -mr-2">
            <img
              src="/images/dr/c00fe66de465abc794d13288b7c334c3123aff95.webp"
              alt="drProfile"
              className="w-[50px] h-[50px] rounded-full min-w-[50px] min-h-[50px] border border-[#0069D1] "
            />
          </div>

          <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full min-w-[55px] min-h-[55px] bg-[#F2F4F6] ">
            <p className="text-[#637187]">۴۵۳+</p>
          </div>
        </div>
        {/* button */}
        <button className="max-lg:hidden w-full h-[40px] border mt-6 rounded-lg border-[#A9A9A9] font-semibold text-sm">
          مشاهده پزشکان
        </button>
        <Link
          href={"/"}
          className="lg:hidden flex mr-auto ml:3 items-center gap-0.5 "
        >
          <p className="font-semibold text-black text-sm">مشاهده</p>
          <ChevronLeft className="w-3 h-3 mb-1" />
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseInfoCard;
