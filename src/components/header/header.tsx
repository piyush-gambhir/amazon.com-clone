import Image from "next/image";
import Link from "next/link";

import Search from "@components/header/search";

export const HeaderConfig = {
  headerLinks: [
    {
      name: "Best Sellers",
      link: "/",
    },
    {
      name: "Mobiles",
      link: "/",
    },
    {
      name: "Fashion",
      link: "/",
    },
    {
      name: "Electronics",
      link: "/",
    },
    {
      name: "New Releases",
      link: "/",
    },
    {
      name: "Customer Service",
      link: "/",
    },
    {
      name: "Prime",
      link: "/",
    },
  ],
};
const cartCount = 0;

export default function Header() {
  return (
    <div className="flex-col text-white">
      <div className="bg-[#131921] flex flex-row focus:">
        <Link
          href="/"
          className="ml-[11px] my-1 px-2 pt-1 border-[1px] border-transparent border-solid rounded-sm hover:border-white"
        >
          <Image
            className="mt-3"
            src="/amazon_logo_white_text.png"
            alt="Amazon Logo"
            width={97}
            height={30}
          />
        </Link>
        <button className="flex flex-row my-[5px] mr-[1px] px-[9px] items-center border-transparent border rounded-sm hover:border-white">
          <span className="mr-5">L</span>
          <div className="flex flex-col justify-start items-start">
            <div className="self-start text-light_gray text-xs font-normal">
              Hello
            </div>
            <div className="flex leading-[15px] pb-[1px] font-bold text-sm">
              Select your address
            </div>
          </div>
        </button>
        <Search />
        <button className="flex flex-col px-2 py-1 my-1 justify-center border-[1px] border-transparent border-solid rounded-sm hover:border-white">
          <div className="text-light_gray text-xs font-normal">
            Hello, sign in
          </div>
          <div className="flex flex-row">
            <div className="leading-[15px] pb-[1px] font-bold text-sm">
              Account & Lists
            </div>
            <Image
              className="ml-[2px] transform rotate-90"
              src="/icons/common/triangle_right_sharp_edges_white.svg"
              alt="arrow down icon"
              width={16}
              height={16}
            />
          </div>
        </button>
        <Link
          href=""
          className="cursor-pointer flex flex-col px-2 py-1 my-1 justify-center border-[1px] border-transparent border-solid rounded-sm hover:border-white"
        >
          <div className="text-light_gray text-xs font-normal">Returns</div>
          <div className="text-white leading-[15px] pb-[1px] font-bold text-sm">
            & Orders
          </div>
        </Link>
        <Link
          href=""
          className="cursor-pointer flex flex-row pl-1 pr-8 py-1 my-1 justify-center border-[1px] border-transparent border-solid rounded-sm hover:border-white"
        >
          <div className="relative">
            <div className="absolute top-[7px] right-[13px] flex justify-center items-center w-[18px] h-[18px]  rounded-full">
              <span className="text-sm font-bold text-pumpkin_orange">
                {cartCount}
              </span>
            </div>
            <span>C</span>
          </div>
          <div className="relative">
            <div className="absolute top-[22px] -right-[22px] text-white leading-[15px] pb-[1px] font-bold text-sm">
              Cart
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row pl-[11px] justify-between bg-[#232f3e]">
        <div className="flex flex-row">
          <button className="text-white text-sm px-[6px] py-[6px] flex flex-row gap-0.5 items-center border-[1px] border-transparent border-solid rounded-sm hover:border-white">
            <span>M</span>
            <span className="font-semibold">All</span>
          </button>
          {HeaderConfig.headerLinks.map((headerLink, index) => (
            <Link
              key={index}
              href={headerLink.link}
              className="flex border-[1px] border-transparent border-solid rounded-sm hover:border-white"
            >
              <div className="px-[8px] py-[3px] my-[3px]">
                <span className="text-sm font-normal text-white">
                  {headerLink.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
