import ExpertiseDrCard from "@/components/card/ExpertiseDrCard";
import { centeralMedicals, expertise } from "@/constant/constant";

const page = ({ params }: { params: any }) => {
  const expe = expertise.filter((i) => i.id === params.expertise);

  return (
    <div className="flex flex-col lg:main-w w-full  py-7 lg:py-5">
      <div className="py-1 space-y-3  mt-6">
        {centeralMedicals.map((dr) => (
          <ExpertiseDrCard
            title={dr.title}
            city={dr.city}
            img={dr.img}
            location={dr.location}
            key={dr.id}
            id={dr.id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
