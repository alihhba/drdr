import ExpertiseDrCard from "@/components/card/ExpertiseDrCard";
import { drInfo, expertise } from "@/constant/constant";
import { User } from "lucide-react";

const page = ({ params }: { params: any }) => {
  const expe = expertise.filter((i) => i.id === params.expertise);

  return (
    <div className="flex flex-col lg:main-w w-full  py-7 lg:py-5">
      <div className="flex items-center gap-1">
        <User className="w-6 h-6 mb-1 text-[#202020]" />
        <p className="text-sm font-extrabold">
          نوبت مشاوره تلفنی دکتر با بهترین دکترهای ایران
        </p>
      </div>

      <div className="py-1 space-y-3 mt-4">
        {drInfo.map((dr) => (
          <ExpertiseDrCard
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
            dr
          />
        ))}
      </div>

      <div className="flex flex-col space-y-6 mt-7">
        <p>
          بدون نیاز به مراجعه حضوری به مطب و به راحتی یک تماس، با برترین دکترهای
          ایران به صورت تلفنی در ارتباط باشید. سامانه مشاوره تلفنی دکتردکتر با
          داشتن بیش از 1000 پزشک در تمامی تخصص‌ها مانند زنان و زایمان، گوارش و
          کبد، بیماری‌های پوستی، مغز و اعصاب، روانشناسی و روانپزشکی و غیره، به
          صورت تلفنی به شما مشاوره می‌دهد. با سامانه مشاوره تلفنی دکتر دکتر،
          می‌توانید از هر جای ایران به برترین پزشکان تخصص‌های مختلف دسترسی داشته
          باشید و در زمان‌های مختلف شبانه‌روز از آن‌ها مشاوره بگیرید.
        </p>
        <p>
          مشاوره تلفنی دکتر زنان، مشاوره تلفنی دکتر گوش، حلق و بینی، مشاوره
          تلفنی دکتر مغز و اعصاب، مشاوره تلفنی دکتر قلب، مشاوره تلفنی دکتر غدد،
          مشاوره تلفنی دکتر اطفال، مشاوره تلفنی دکتر پوست و مو و مشاوره تلفنی
          دکتر روانشناس و روانپزشک به راحتی و به سادگی یک ثبت نوبت در دسترس
          شماست.
        </p>
      </div>
    </div>
  );
};

export default page;
