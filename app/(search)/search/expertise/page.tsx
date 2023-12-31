import LinkShower from "@/components/LinkShower";
import ExpertiseInfoCard from "@/components/card/ExpertiseInfoCard";
import { cityes, expertise } from "@/constant/constant";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col main-w w-full  py-7 lg:py-5">
      <p className="text-sm font-extrabold">
        دکتردکتر - لیست تخصص های پزشکی فعال
      </p>

      <div className="py-1">
        {expertise.map((item) => (
          <ExpertiseInfoCard title={item.name} key={item.id} id={item.id} />
        ))}
      </div>

      <div className="w-full mt-2 bg-white rounded-lg">
        <div className=" border border-[#CCE6FF] rounded-lg ">
          <div className="">
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
