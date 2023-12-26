import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode;
  title: string;
  desc?: string;
  path: string;
  pathString: string;
  className?: string;
  classNameTitle?: string;
}

const SectionWrapper = ({
  children,
  desc,
  path,
  pathString,
  title,
  className,
  classNameTitle,
}: props) => {
  return (
    <div className={`${className} py-10 `}>
      <div className={`flex flex-col main-w `}>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className={`${classNameTitle} lg:text-3xl text-2xl`}>{title}</p>
            <p>{desc}</p>
          </div>

          <Link
            href={path}
            className={`hidden  lg:flex items-center gap-2  ${classNameTitle} `}
          >
            {pathString}
            <ArrowLeft className="w-4 h-4 " />
          </Link>
        </div>

        <div className="mt-5">{children}</div>

        <Link
            href={path}
            className={`lg:hidden flex items-center justify-center gap-2 mt-7 ${classNameTitle} `}
          >
            {pathString}
            <ArrowLeft className="w-4 h-4 " />
          </Link>
      </div>
    </div>
  );
};

export default SectionWrapper;
