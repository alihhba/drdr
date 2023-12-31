"use client";
import { ChevronDown, MapPin, PhoneCall } from "lucide-react";
import { RefObject, useEffect, useRef, useState } from "react";
import StarBox from "../StarBox";
import CommentBox from "./CommentBox";
import { BlobOptions } from "buffer";

interface props {
  item: {
    id: string;
    evisit?: boolean;
    espanser?: boolean;
    title: string;
    img: string;
    expertise?: string;
    city: string;
    location: string;
    time?: string;
    firstTime?: string;
    answerTime?: string;
  }[];

  dr?: boolean;
}

const DrInfo = ({ item, dr }: props) => {
  const [showInfo, setShowInfo] = useState("about");
  const [showMore1, setShowMore1] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const sectionIds = ["about", "contact", "comment"];

  const sectionsRefs: any = {
    about: useRef(null),
    contact: useRef(null),
    comment: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 110;
    sectionIds.forEach((id) => {
      const ref = sectionsRefs[id];
      if (ref.current) {
        const offsetTop = ref.current.offsetTop;
        const offsetBottom = offsetTop + ref.current.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setShowInfo(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollToSection = (sectionKey: keyof typeof sectionsRefs) => {
    const section = sectionsRefs[sectionKey].current;
    if (section) {
      const topPos = section.offsetTop - 150;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col pt-3 bg-white w-full rounded-lg border border-[#ECEFF1]">
      <div className="flex items-center justify-center max-lg:justify-between max-lg:px-10 gap-6 border-b border-[#ECEFF1] font-semibold">
        <div
          onClick={() => {
            setShowInfo("about");
            scrollToSection("about");
          }}
          className={`cursor-pointer sticky top-0 ${
            showInfo.includes("about")
              ? "text-[#0069D1] border-b-2 border-[#0069D1]"
              : "border-b-2 border-transparent"
          } pb-3`}
        >
          {dr ? <a>درباره پزشک</a> : <a>درباره کلینیک</a>}
        </div>
        <div
          onClick={() => {
            setShowInfo("contact");
            scrollToSection("contact");
          }}
          className={`cursor-pointer ${
            showInfo.includes("contact")
              ? "text-[#0069D1] border-b-2 border-[#0069D1]"
              : "border-b-2 border-transparent"
          } pb-3`}
        >
          <a href="#phone">اطلاعات تماس</a>
        </div>
        {dr && (
          <div
            onClick={() => {
              setShowInfo("comment");
              scrollToSection("comment");
            }}
            className={`cursor-pointer ${
              showInfo.includes("comment")
                ? "text-[#0069D1] border-b-2 border-[#0069D1]"
                : "border-b-2 border-transparent"
            } pb-3`}
          >
            <p>نظر و امتیاز</p>
          </div>
        )}
      </div>

      {/* item info */}
      {dr ? (
        <div
          ref={sectionsRefs.about}
          className={`flex flex-col gap-3 px-5 pt-5 overflow-hidden h-full`}
        >
          <div
            className={`${
              showMore1 ? "max-h-full" : "max-h-[200px]"
            } flex flex-col gap-3`}
          >
            <p className="font-semibold">درباره پزشک</p>

            <div className="flex items-center gap-2">
              <p className="font-semibold">کد نظام پزشکی:</p>
              <div className="bg-[#ECEFF1] p-1 px-2">
                <p className="text-xs">112550</p>
              </div>
            </div>

            <p className="mt-3">
              دکتر فرزان نقش وار متخصص جراحی عمومی و جراحی تخصصی زیبایی بیش از
              بیست سال سابقه درخشان پزشکی و جراحی می باشند.
            </p>

            <p className="font-semibold mt-2">
              خدمات ارائه شده توسط دکترفرزان نقش وار
            </p>

            <p>
              مشاوره در مطب و جراحی تحت بیهوشی برای لیپوماتیک شکم و پهلو و کمر و
              ران و بازو، لیپوابدومینوپلاستی و رفع افتادگی شکم، براکیوپلاستی و
              رفع افتادگی بازو، ماموپلاستی و لیفت پستان، پروتز پستان و بررسی
              بیماریها و توده های پستانی <br />
              جراحی در مطب بالیزر فرکشنال
              <br />
              جراحی لیزری بیماریهای نشیمنگاهی در مطب فقط در ۳۰ دقیقه بدون درد و
              خونریزی: هموروئید-فیستولکیست موییشقاق_توده های چربی.....
              <br />
              بابیشترین سابقه درمان قطعی بیماریهای بواسیر،شقاق،کیست مویی..
              <br />
              جراحی های لیزری پوستی، خالهای خوش خیم و بدخیم و لیپوم پوستی و توده
              های پوست سر و بدن در مطب با لیزر تخصصی
              <br />
              انواع جراحی های زیبایی سرپایی، لیفت صورت و ابرو وغبغب بانخ، تزریق
              چربی و بلفاروپلاستی، بوکال فت و سانترال لب
              <br />
              محیطی کاملا امن وپرسنل مجرب خانم
              <br />
              انجام صدها جراحی موفق درتهران، با صدها کاربر، بیمار و زیباجوی
              رضایتمند و بهترین و بروزترین دستگاه های روز دنیا بامحیطی کاملا
              استریل وآرام درخدمت شما عزیزان هستیم.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-t w-full pt-3  ">
            {!showMore1 && (
              <div className="w-full h-[50px] min-h-[50px] bg-gradient-to-t from-white to-transparent"></div>
            )}
            <div
              onClick={() => setShowMore1(!showMore1)}
              className=" flex items-center gap-2
            justify-center w-full cursor-pointer pb-20 bg-white pt-2"
            >
              <p className="text-[#0069D1]">{showMore1 ? "کمتر" : "بیشتر"}</p>
              <ChevronDown
                className={`w-4 h-4 text-[#0069D1] ${
                  showMore1 && "rotate-180"
                }`}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={sectionsRefs.about}
          className={`flex flex-col gap-3 px-5 pt-5 overflow-hidden h-full`}
        >
          <div
            className={`${
              showMore1 ? "max-h-full" : "max-h-[200px]"
            } flex flex-col gap-3`}
          >
            <p className="font-semibold">درباره کلینیک</p>

            <p>
              مشاوره در مطب و جراحی تحت بیهوشی برای لیپوماتیک شکم و پهلو و کمر و
              ران و بازو، لیپوابدومینوپلاستی و رفع افتادگی شکم، براکیوپلاستی و
              رفع افتادگی بازو، ماموپلاستی و لیفت پستان، پروتز پستان و بررسی
              بیماریها و توده های پستانی <br />
              جراحی در مطب بالیزر فرکشنال
              <br />
              جراحی لیزری بیماریهای نشیمنگاهی در مطب فقط در ۳۰ دقیقه بدون درد و
              خونریزی: هموروئید-فیستولکیست موییشقاق_توده های چربی.....
              <br />
              بابیشترین سابقه درمان قطعی بیماریهای بواسیر،شقاق،کیست مویی..
              <br />
              جراحی های لیزری پوستی، خالهای خوش خیم و بدخیم و لیپوم پوستی و توده
              های پوست سر و بدن در مطب با لیزر تخصصی
              <br />
              انواع جراحی های زیبایی سرپایی، لیفت صورت و ابرو وغبغب بانخ، تزریق
              چربی و بلفاروپلاستی، بوکال فت و سانترال لب
              <br />
              محیطی کاملا امن وپرسنل مجرب خانم
              <br />
              انجام صدها جراحی موفق درتهران، با صدها کاربر، بیمار و زیباجوی
              رضایتمند و بهترین و بروزترین دستگاه های روز دنیا بامحیطی کاملا
              استریل وآرام درخدمت شما عزیزان هستیم.
            </p>
          </div>

          <div className="flex flex-col bg-gradient-to-t w-full pt-3  ">
            {!showMore1 && (
              <div className="w-full h-[50px] min-h-[50px] bg-gradient-to-t from-white to-transparent"></div>
            )}
            <div
              onClick={() => setShowMore1(!showMore1)}
              className=" flex items-center gap-2
          justify-center w-full cursor-pointer pb-20 bg-white pt-2"
            >
              <p className="text-[#0069D1]">{showMore1 ? "کمتر" : "بیشتر"}</p>
              <ChevronDown
                className={`w-4 h-4 text-[#0069D1] ${
                  showMore1 && "rotate-180"
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* line */}
      <div className="w-full border-b-[4px] border-[#ECEFF1]"></div>

      {/* phone */}
      <div
        ref={sectionsRefs.contact}
        className="flex flex-col gap-3 px-5 pt-5 pb-5"
      >
        <p className="font-semibold">اطلاعات تماس</p>

        <p className="font-semibold">مطب فرزان نقشوار</p>

        <div className="flex items-center gap-2 text-sm">
          <PhoneCall className="w-4 h-4  text-[#0069D1]" />
          <p className="font-semibold">نوبت دهی تلفنی ۲۴ساعته:</p>
          <p className="mr-1">ندارد</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <PhoneCall className="w-4 h-4  text-[#0069D1]" />
          <p className="font-semibold">تلفن تماس مطب:</p>
          <p className="mr-1">
            {showNumber ? (
              <div className="flex items-center text-[#0069D1] font-semibold]">
                <a href="tell:09030533103">02122083860</a> -
                <a href="tell:02122083860">02122083860</a>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {!showNumber && (
                  <p
                    onClick={() => setShowNumber(true)}
                    className="cursor-pointer text-[#0069D1]"
                  >
                    نمایش
                  </p>
                )}
                {showNumber ? (
                  <div className="flex items-center text-[#0069D1] font-semibold]">
                    <a href="tell:09030533103">02122083860</a> -
                    <a href="tell:02122083860">02122083860</a>
                  </div>
                ) : (
                  <div className="flex items-center text-black font-semibold]">
                    <a href="tell:09030533103">021220****</a> -
                    <a href="tell:02122083860">021220****</a>
                  </div>
                )}
              </div>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-[#0069D1]" />
          <p className="font-semibold line-clamp-2">آدرس مطب:</p>

          <p>{item[0]?.location}</p>
        </div>
      </div>

      {/* line */}
      <div className="w-full border-b-[4px] border-[#ECEFF1]"></div>

      {/* comments */}
      {dr && (
        <div
          ref={sectionsRefs.comment}
          className="flex flex-col gap-3 px-5 py-5 "
        >
          <div className="flex flex-col">
            <p className="font-semibold">نظر و امتیاز</p>

            <div className="flex items-center justify-center">
              <StarBox />
              <p className="">امتیاز میانگین از 16 کاربر</p>
            </div>

            <button className="p-3 px-5 rounded-lg border border-[#0069D1] text-[#0069D1] mt-3 w-full lg:w-fit mx-auto font-semibold">
              ثبت نظر و امتیاز
            </button>
          </div>

          <div className="mt-3 flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-bold">نظر بیماران</p>
              <span className="font-base "> (14 نفر)</span>
            </div>

            <div className="mt-3 space-y-2">
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrInfo;
