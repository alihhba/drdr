import LoginBtn from "@/components/LoginBtn";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "نوبت دهی", path: "/search/expertise" },
  { title: "مشاوره تلفنی", path: "/evisit" },
  { title: "تخصص ها", path: "/evisit" },
  { title: "مراکز درمانی", path: "/medical-centers" },
  { title: "خدمات پزشکی در محل", path: "/medical-local" },
  { title: "مجله سلامت", path: "/blog" },
];

const Header = () => {
  return (
    <div className= " z-50  flex flex-col w-full h-fit main-w py-3 gap-3">
      <div className="flex justify-between items-center flex-row">
        {/* menu mobile */}
        <Menu className="w-7 h-7 lg:hidden cursor-pointer" />
        {/* logo */}
        <div className="flex gap-1">
          <Image src={`/images/symbol.svg`} height={30} width={30} alt="logo" />
          <Image src={`/images/drdr.svg`} height={100} width={100} alt="logo" />
        </div>
        {/* login btn */}
        <LoginBtn />
      </div>

      <div className="hidden lg:flex   justify-between items-center flex-row">
        <div className="flex flex-row-reverse gap-3">
          {items.map((item) => (
            <Link href={item.path} key={item.title} className="flex ">
              <p className="text-sm">{item.title}</p>
            </Link>
          )).reverse()}
        </div>

        <div>
          <button className="flex  items-center justify-center lg:px-3 px-2 py-2 rounded-lg gap-2 text-red-500 ">
            <p className="max-lg:hidden text-sm">برای پزشکان</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
