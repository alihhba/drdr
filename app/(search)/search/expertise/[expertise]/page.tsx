
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
          {`دریافت نوبت بهترین دکتر متخصص ${expe[0].name}`}
        </p>
      </div>

      <div className="py-1 space-y-1 lg:space-y-3 mt-6">
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
          />
        ))}
      </div>
    </div>
  );
};

export default page;
