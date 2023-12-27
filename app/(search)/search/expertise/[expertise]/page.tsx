import { drInfo } from "@/app/page";
import ExpertiseDrCard from "@/components/card/ExpertiseDrCard";
import { expertise } from "@/constant/constant";

const page = ({ params }: { params: any }) => {
  const expe = expertise.filter((i) => i.id === params.expertise);

  return (
    <div className="flex flex-col lg:main-w w-full  py-7 lg:py-5">
      <p className="text-sm font-extrabold max-lg:pr-4 max-lg:pb-3">
        {`دریافت نوبت بهترین دکتر متخصص ${expe[0].name}`}
      </p>

      <div className="py-1 space-y-1 lg:space-y-3">
        {drInfo.map((dr, i) => (
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
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
