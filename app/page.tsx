/* eslint-disable @next/next/no-img-element */
import LinkShower from "@/components/LinkShower";
import DrCard from "@/components/card/DrCard";
import ExpertiseCard from "@/components/card/ExpertiseCard";
import MedicalCenterCard from "@/components/card/MedicalCenterCard";
import CommentCard from "@/components/card/commentCard";
import Hero from "@/components/main/Hero";
import SectionWrapper from "@/components/main/SectionWrapper";
import DrSlider from "@/components/slider/DrSlider";

// Import Swiper styles
import ExpertiseSlider from "@/components/slider/ExpertiseSlider";
import MedicalCenterSlider from "@/components/slider/medicalCenterSlider";
import { cityes, drInfo, expertise } from "@/constant/constant";
import { ArrowLeft, UserCheck } from "lucide-react";
import Link from "next/link";
import "swiper/css";

const centeralMedicals = [
  {
    id: "1",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "مشهد",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "2",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "اصفهان",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "3",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "شیراز",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "4",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "تبریز",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "5",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "کرمان",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "6",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "قم",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "7",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "رشت",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "8",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "ساری",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "9",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "کرمانشاه",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
  {
    id: "10",
    name: "کلینیک تخصصی زخم و ترمیم بافت جهاد دانشگاهی",
    img: "/images/medicalCenter-1.webp",
    city: "ارومیه",
    location:
      "خیابان انقلاب، خیابان ابوریحان، نبش خیابان وحید نظری، پلاک 66، طبقه دوم",
  },
];

export default function Home() {
  return (
    <main>
      {/* hero */}
      <Hero />
      {/* sections */}
      <div>
        <SectionWrapper
          title="ویزیت فوری پزشک"
          desc="ارتباط با پزشکانی که در سریع‌ترین زمان امکان پاسخگویی دارند."
          path="/evisit"
          pathString="مشاهده همه پزشکان آنلاین"
          className="h-fit max-lg:pt-0"
          classNameTitle="text-[#148539]"
        >
          <div className="flex flex-row   gap-4  overflow-x-scroll ">
            {drInfo
              .filter((dr) => dr.evisit === true)
              .slice(0, 4)
              .map((dr, i) => (
                <DrCard
                  title={dr.title}
                  answerTime={dr.answerTime}
                  city={dr.city}
                  expertise={dr.expertise}
                  firstTime={dr.firstTime}
                  img={dr.img}
                  location={dr.location}
                  time={dr.time}
                  espanser={dr.espanser}
                  evisit={dr.evisit}
                  key={i}
                  id={dr.id}
                />
              ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="در چه تخصصی به دنبال پزشک هستید؟"
          path="/search/expertise"
          pathString="مشاهده لیست تخصص‌ها"
          className="h-fit bg-[#F4FAFF]"
          classNameTitle="text-[#004E9B]"
        >
          <div className="w-full flex max-lg:hidden">
            <ExpertiseSlider />
          </div>
          <div className="lg:hidden flex flex-col w-full overflow-x-scroll gap-3">
            <div className="flex gap-3">
              {expertise.slice(0, 23).map((item) => (
                <ExpertiseCard
                  key={item.id}
                  title={item.name}
                  img={item.img}
                  id={item.id}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {expertise.slice(23, 46).map((item) => (
                <ExpertiseCard
                  key={item.id}
                  title={item.name}
                  img={item.img}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="کلینیک و مراکز درمانی"
          desc="دریافت خدمات از مراکز درمانی در سراسر کشور"
          path="/medical-centers"
          pathString="مشاهده همه مراکز"
          className="h-fit"
          classNameTitle="text-[#004E9B]"
        >
          <div className="max-lg:hidden">
            <MedicalCenterSlider items={centeralMedicals} />
          </div>
          <div className="lg:hidden flex flex-row   gap-4  overflow-x-scroll ">
            {centeralMedicals.map((item, i) => (
              <MedicalCenterCard
                key={i}
                name={item.name}
                city={item.city}
                img={item.img}
                location={item.location}
                id={item.id}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="معرفی پزشکان"
          desc="نوبت‌دهی اینترنتی و رایگان از پزشکان سراسر ایران"
          path="/search/expertise"
          pathString="مشاهده همه پزشکان"
          className="h-fit"
          classNameTitle="text-[#004E9B]"
        >
          <div className="max-lg:hidden">
            <DrSlider items={drInfo} />
          </div>
          <div className="lg:hidden flex flex-row   gap-4  overflow-x-scroll ">
            {drInfo
              .filter((dr) => dr.evisit === false)
              .map((dr) => (
                <DrCard
                  title={dr.title}
                  answerTime={dr.answerTime}
                  city={dr.city}
                  expertise={dr.expertise}
                  firstTime={dr.firstTime}
                  img={dr.img}
                  location={dr.location}
                  time={dr.time}
                  espanser={dr.espanser}
                  evisit={dr.evisit}
                  key={dr.id}
                  id={dr.id}
                />
              ))}
          </div>
        </SectionWrapper>
      </div>

      {/* section  */}
      <div className="bg-[#E6F3FF] pb-9">
        <div className=" main-w w-full flex flex-col items-center justify-center mt-8 px-5 pb-8">
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
            {/* img */}
            <img
              src="/images/phone.webp"
              alt="phone"
              className="w-[280px] h-full -mt-10 "
            />

            <div className="flex flex-col justify-center items-center ">
              <p className="text-4xl text-[#004E9B] mt-5 lg:ml-auto">
                سامانه رزرو نوبت دکتر آنلاین
              </p>

              <p className="text-[#1E1F21] text-sm text-center leading-7 lg:ml-auto lg:text-start lg:w-9/12 lg:text-lg">
                با استفاده از خدمات سلامت دیجیتال دکتردکتر، تجربه سریع و راحت از
                خدمات پزشکی داشته باشید. نوبت‌دهی آنلاین، دریافت مشاوره به صورت
                تلفنی و استفاده از خدمات کلینیک‌ها و مراکز درمانی از جمله خدمات
                ما هستند. همچنین برای تجربه بهتر در استفاده از خدمات ما بر روی
                تلفن همراه، می‌توانید نرم‌افزار ما برای گوشی‌های اندروید را
                دریافت و نصب کنید.
              </p>

              <p className="text-[#004E9B] text-2xl mt-5 mb-2 lg:ml-auto">
                دانلود اپلیکیشن دکتردکتر
              </p>

              <div className="flex flex-col lg:flex-row gap-3 lg:ml-auto ">
                <div className="flex items-center justify-start bg-black text-white p-3  rounded-lg gap-2 my-3 min-w-[200px] shadow-sm">
                  <img src="/images/myket.webp" alt="market" />
                  <div className="flex flex-col ">
                    <p className="text-[10px]">اپلیکیشن اندروید</p>
                    <p>دریافت مستقیم</p>
                  </div>
                </div>

                <div className="flex items-center justify-start bg-black text-white p-3  rounded-lg gap-2 my-3 min-w-[200px] shadow-sm">
                  <img src="/images/bazar.webp" alt="market" />
                  <div className="flex flex-col ">
                    <p className="text-[10px]">اپلیکیشن اندروید</p>
                    <p>دریافت از کافه بازار</p>
                  </div>
                </div>

                <div className="flex items-center justify-start bg-black text-white p-3  rounded-lg gap-2 my-3 min-w-[200px] shadow-sm">
                  <img src="/images/myket.webp" alt="market" />
                  <div className="flex flex-col ">
                    <p className="text-[10px]">اپلیکیشن اندروید</p>
                    <p>دریافت از مایکت</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:mt-2 lg:px-20 mx-auto main-w">
          <div className="flex flex-col gap-3 mt-7 lg:mt-0 items-center justify-center">
            <img
              src="/images/headphone.png"
              alt="headphone"
              className="w-[60px] h-[60px] mx-auto"
            />
            <p className="text-[#004E9B] text-2xl lg:text-3xl">
              در تمام لحظات همراهتونیم
            </p>
            <p className="text-[#1E1F21] text-sm lg:text-lg ">
              پشتیبانی ۷ روز هفته؛ ۹ صبح الی ۱ بامداد
            </p>
            <p className="text-3xl">۰۲۱-۴۲۱۹۸۰۰۰</p>
          </div>

          <div className="bg-[#004E9B] w-36 h-[1px] my-6 mx-auto lg:h-36 lg:w-[1px]"></div>

          <div className="flex flex-col gap-3 items-center justify-center">
            <img
              src="/images/message.png"
              alt="headphone"
              className="w-[60px] h-[60px] mx-auto"
            />
            <p className="text-[#004E9B] text-2xl lg:text-3xl">
              سوالات احتمالی شما
            </p>
            <p className="text-[#1E1F21] text-sm lg:text-lg">
              مشاهده پاسخ سوالات پر تکرار کاربران
            </p>
            <button className="w-fit border border-[#004E9B] px-3 py-2 rounded-lg text-[#004E9B] mt-2">
              <div className="flex gap-2 items-center">
                <p className="text-xl">سوالات پرتکرار</p>
                <ArrowLeft className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* section  */}
      <div className=" flex flex-col w-full gap-5 py-10 main-w">
        <div className="flex flex-col justify-start gap-2">
          <p className="lg:text-3xl text-2xl text-[#004E9B]">
            نظرات کاربران دکتردکتر
          </p>
          <div className="flex items-center gap-3 ">
            <UserCheck className="w-6 h-6" />
            <p>بیش از ۶,۹۱۸,۱۸۹ نفر از خدمات دکتردکتر استفاده کرده‌اند</p>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-6 h-fit overflow-x-scroll max-lg:pl-2">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>

      {/* section */}
      <div className="main-w mb-14">
        <div className=" border border-[#CCE6FF] rounded-lg ">
          <div className="border-b  border-[#CCE6FF]">
            <LinkShower title="لیست پزشکان بر اساس مرکز استان‌">
              {cityes.map((city) => (
                <Link
                  href={`/search/city-${city.id}/expertise`}
                  key={city.id}
                  className="text-[#0067CD] flex  items-center gap-2 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-[#0067CD] rounded-full"></div>
                  <p className="text-[14px]">دکترهای {city.name}</p>
                </Link>
              ))}
            </LinkShower>
          </div>
          <div className="">
            <LinkShower title="لیست پزشکان بر اساس تخصص">
              {expertise.map((item) => (
                <Link
                  href={`/search/expertise/${item.id}`}
                  key={item.id}
                  className="text-[#0067CD] flex  items-center gap-2 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-[#0067CD] rounded-full"></div>
                  <p className="text-[14px]">دکتر {item.name}</p>
                </Link>
              ))}
            </LinkShower>
          </div>
        </div>
      </div>
    </main>
  );
}
