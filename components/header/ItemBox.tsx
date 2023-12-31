import { ArrowLeft, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/home/itemBox.css";

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
    <div className={`  ${className} container`}>
      <div className="image-box">
        <Image
          src={icon}
          height={48}
          width={48}
          alt="feature1"
          className="lg:w-16"
        />
      </div>
      <p className="item-box-title">
        {title}
      </p>

      <p className="desc">{desc}</p>

      <Link href={path} className="max-lg:mr-auto lg:hidden">
        <ChevronLeft className="w-5 h-5  max-lg:ml-4" />
      </Link>

      <Link
        href={path}
        className="flex items-center gap-2 mt-5 text-blue-600 pr-3 max-lg:hidden"
      >
        <p>{pathString}</p>
        <ArrowLeft />
      </Link>
    </div>
  );
};

export default ItemBox;
