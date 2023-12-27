/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

interface props {
  title: string;
  img: string;
  id: string;
}

const ExpertiseCard = ({ title, img, id }: props) => {
  return (
    <Link href={`/search/expertise/${id}`}>
      <div className="flex items-center justify-center flex-col gap-3 px-1 lg:px-2 py-8  border border-[#004E9B] w-fit min-w-[134px] lg:min-w-[174px] bg-white rounded-lg shadow-sm max-w-[134px] lg:max-w-[174px]">
        <img src={img} alt="expertise-1" className="w-[54px]  h-[54px]" />
        <p className="text-[#004E9B] text-center line-clamp-1 text-sm">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ExpertiseCard;
