"use client";
import LoginBtn from "@/components/LoginBtn";
import { expertise } from "@/constant/constant";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SearchBox from "../SearchBox";
import { usePathname } from "next/navigation";

const items = [
  { title: "نوبت دهی", path: "/search/expertise" },
  { title: "مشاوره تلفنی", path: "/evisit" },
  { title: "تخصص ها", path: "/evisit" },
  { title: "مراکز درمانی", path: `/medical-centers` },
  { title: "خدمات پزشکی در محل", path: "/medical-local" },
  { title: "مجله سلامت", path: "/blog" },
];

const Header = () => {
  const [megaMenu, setMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    mobileMenu
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [mobileMenu]);

  return (
    <div className="z-50  flex flex-col w-full h-fit main-w py-3 gap-3">
      {/* mega menu */}
      {megaMenu && (
        <div
          onMouseOver={() => setMegaMenu(true)}
          onMouseOut={() => setMegaMenu(false)}
          className={`absolute ${
            pathname.length > 3 ? "top-[99px]" : "top-[93px]"
          }  left-0 w-screen h-[464px] bg-[#FFFFFF] shadow-lg pt-[14px]`}
        >
          <div className="flex h-full w-full border border-[#DAEDFF] py-10">
            <div className="h-full w-2/12 border-l border-[#0067CD] flex justify-end px-4 ">
              <button className="text-[#0067CD] h-[40px] w-[149px] border border-[#0067CD] rounded-lg">
                لیست تخصص‌ها
              </button>
            </div>

            <div className="grid grid-cols-4 w-full px-4 pr-12">
              {expertise.map((item) => (
                <Link
                  onClick={() => setMegaMenu(false)}
                  key={item.id}
                  href={`/search/expertise/${item.id}`}
                  className="text-[17px] w-fit h-fit text-[#0067CD]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center flex-row">
        {/* menu mobile */}
        <Menu
          onClick={() => setMobileMenu(true)}
          className="w-7 h-7 lg:hidden cursor-pointer"
        />

        {/* overlay */}
        {mobileMenu && (
          <div
            onClick={() => setMobileMenu(false)}
            className="absolute inset-0 w-screen h-screen backdrop-filter backdrop-blur-sm transition-all duration-500"
          ></div>
        )}

        <div
          className={`absolute w-[300px] backdrop-filter backdrop-blur-none shadow-lg h-screen bg-white transition-all duration-500 ${
            mobileMenu
              ? "top-0 right-0 bottom-0"
              : "-right-[100vw] top-0 bottom-0"
          }`}
        >
          <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        </div>

        {/* logo */}
        <Logo blue />

        {/* search box */}
        {pathname.length > 3 && (
          <div className="max-lg:hidden">
            <SearchBox />
          </div>
        )}
        {/* login btn */}
        <LoginBtn />
      </div>

      {pathname.length > 3 && (
        <div className="lg:hidden">
          <SearchBox />
        </div>
      )}

      <div className="hidden lg:flex justify-between items-center flex-row">
        <div className="flex flex-row-reverse gap-3">
          {items
            .map((item) => (
              <Link
                onMouseOver={() =>
                  item.title === "تخصص ها" && setMegaMenu(true)
                }
                onMouseOut={() =>
                  item.title === "تخصص ها" && setMegaMenu(false)
                }
                href={item.path}
                key={item.title}
                className="flex items-center gap-1"
              >
                <p className="text-sm font-bold">{item.title}</p>

                {item.title === "تخصص ها" && (
                  <ChevronDown
                    className={`h-4 w-4 ${
                      megaMenu && "rotate-180 transition-all"
                    } transition-all`}
                  />
                )}
              </Link>
            ))
            .reverse()}
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
