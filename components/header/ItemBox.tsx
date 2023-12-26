import { ArrowLeft, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface props {
  title: string;
  desc: string;
  icon: string;
  path: string;
  className: string;
  pathString: string;
}

const ItemBox = ({ desc, icon, path, title, className, pathString }: props) => {
  return (
    <div
      className={`relative flex w-full lg:flex-col lg:px-7  max-lg:items-center lg:gap-3   rounded-lg py-4 lg:pb-8  ${className}`}
    >
      <div className="max-lg:-mr-2 lg:-mt-9 lg:ml-auto lg:-mr-3">
        <Image
          src={icon}
          height={48}
          width={48}
          alt="feature1"
          className="lg:w-16"
        />
      </div>
      <p className="max-lg:pr-9 lg:text-2xl text-[#161C1E] line-clamp-1">{title}</p>

      <p className="hidden lg:flex line-clamp-1">{desc}</p>

      <Link href={path} className="max-lg:mr-auto lg:hidden">
        <ChevronLeft className="w-5 h-5  max-lg:ml-4" />
      </Link>

      <Link href={path} className="flex items-center gap-2 mt-5 text-blue-600 pr-3 max-lg:hidden">
        <p>{pathString}</p>
        <ArrowLeft />
      </Link>
    </div>
  );
};

export default ItemBox;
