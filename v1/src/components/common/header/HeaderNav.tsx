import React, { FC } from "react";
import Navbar from "@/components/common/header/Navbar";
import Image from "next/image";
import LogoBg from "@/components/common/header/clip_path_bg/LogoBg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavItems } from "@/lib/config";
import BannerImg from "@/app/assets/images/3dPreview/banner.png";

interface HeaderNavProps {}

const HeaderNav: FC<HeaderNavProps> = ({}) => {
  const navigate = useRouter();
  return (
    <div className="flex flex-row items-end justify-between w-full">
      <div className="flex h-full gap-3">
        {/* logo */}
        <div
          className="relative w-28 h-16 lg:w-40 lg:h-24 *:
                cursor-pointer 
            "
          onClick={() => navigate.push("/")}
        >
          <Image
            src={"/logo-2.svg"}
            alt="logo"
            width={160}
            height={160}
            className="invert dark:invert-0
                        absolute -bottom-2 right-4 
                    "
          />
          <LogoBg />
        </div>
        {/* navbar */}
        <Navbar />
      </div>
      {/* contact button */}
      <div className="hidden md:flex justify-center items-center p-[1.5px] bg-gradient-to-r from-[#82E0F9] via-[#8CEED6] to-[#93FABA] rounded-[20px] my-auto">
        <Link
          href="#contact"
          className="w-[120px] h-[50px] rounded-[20px] bg-background flex justify-center items-center pb-1
           hover:text-black hover:bg-transparent transition-colors duration-300 ease-in-out
          "
        >
          Contact
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden mb-4">
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent>
          <Image src={BannerImg} alt="banner" priority={true} />
          {NavItems.map((item, index) => (
            <SheetClose
              asChild
              key={index}
              className="w-full h-12 flex justify-center items-center"
            >
              <Link href={item.href} className="text-2xl font-thin">
                {item.name}
              </Link>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderNav;
