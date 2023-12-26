import React from "react";
import SearchBox from "../SearchBox";
import Tag from "../Tag";
import Link from "next/link";
import ItemBox from "../header/ItemBox";

const popularSearch = [
  { title: "زنان، زایمان و نازایی" },
  { title: "کودکان" },
  { title: "عمومی" },
  { title: "داخلی" },
  { title: "پوست ، مو و زیبایی" },
  { title: " غدد و متابولیسم" },
  { title: "مغز و اعصاب  (نورولوژی)" },
  { title: "ارتوپدی" },
  { title: "گوش حلق و بینی" },
  { title: "قلب و عروق" },
];

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#f4faff] to-white">
      <div className="main-w flex flex-col lg:py-5 py-12">
        {/* hero text */}
        <div className="flex flex-col lg:text-4xl text-2xl gap-2 lg:gap-4 ">
          <p className="text-center">
            <span className="text-blue-500">۱۵٬۴۳۳</span> پزشک متخصص
          </p>
          <p className="text-center">
            در <span className="text-blue-500">دکتردکتر</span> کنار شما هستند
          </p>
        </div>

        {/* search bar */}
        <div className="flex items-center justify-center lg:mt-16 mt-8">
          <SearchBox />
        </div>

        {/* popular search */}
        <div className="w-full mt-8">
          <div className="flex items-center flex-col lg:flex-row max-lg:gap-4 ">
            <p className="text-xs text-gray-400 w-fit min-w-max">
              جستجو‌های پرتکرار:
            </p>
            <div className="flex gap-2 items-center w-screen overflow-x-scroll px-2">
              {popularSearch.map((tag) => (
                <Link href={"/"} key={tag.title}>
                  <Tag>{tag.title}</Tag>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* list items */}
        <div className="flex items-center flex-col lg:flex-row mt-12 gap-4 -z-0">
          <ItemBox
            title="دریافت نوبت حضوری"
            desc="دریافت نوبت اینترنتی برای مراجعه حضوری به مطب پزشکان"
            icon="/images/feature1.svg"
            path="/search/expertise"
            className="bg-[#cce6ff]"
            pathString="لیست پزشکان"
          />
          <ItemBox
            title="مشاوره تلفنی"
            desc="دریافت مشاوره از پزشکان متخصص و مجرب به صورت تلفنی"
            icon="/images/feature2.svg"
            path="/evisit"
            className="bg-[#daedff]"
            pathString="دریافت مشاوره"
          />
          <ItemBox
            title="خدمات پزشکی و آزمایش در محل"
            desc="دریافت خدمات پزشکی انجام انواع آزمایشات در منزل شما"
            icon="/images/feature3.svg"
            path="/"
            className="bg-[#e6f3ff]"
            pathString="لیست خدمات"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
