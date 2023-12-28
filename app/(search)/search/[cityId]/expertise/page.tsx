import LinkShower from "@/components/LinkShower";
import ExpertiseInfoCard from "@/components/card/ExpertiseInfoCard";
import { cityes, expertise } from "@/constant/constant";
import React from "react";

const page = ({ params }: { params: any }) => {
  const cityId = params?.cityId.split("-")[1];

  const city = cityes.filter((city) => city.id === cityId);
  console.log(city);

  return (
    <div className="flex flex-col main-w w-full  py-7 lg:py-5">
      <p className="text-sm  font-extrabold">{`نوبت دکتر در ${city[0].name}`}</p>

      <div className="py-1">
        {expertise.map((item) => (
          <ExpertiseInfoCard
            title={item.name}
            key={item.id}
            nextTitle={`در ${city[0].name}`}
            id={item.id}
          />
        ))}
      </div>

      <div className="w-full mt-2 bg-white">
        <div className=" border border-[#CCE6FF] rounded-lg ">
          <div className="border-b  border-[#CCE6FF]">
            <LinkShower title="لیست پزشکان بر اساس مرکز استان‌">
              {cityes.map((city) => (
                <div
                  key={city.id}
                  className="text-[#0067CD] flex  items-center gap-2 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-[#0067CD] rounded-full"></div>
                  <p className="text-[14px]">دکترهای {city.name}</p>
                </div>
              ))}
            </LinkShower>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
