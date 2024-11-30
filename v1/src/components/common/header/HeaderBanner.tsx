import BannerBg from "@/components/common/header/clip_path_bg/BannerBg";
import React, { FC, Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import Loading from "@/components/common/Loading";
import BannerImg from "@/app/assets/images/3dPreview/banner.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface HeaderBannerProps {}

const HeaderBanner: FC<HeaderBannerProps> = ({}) => {
  const content = {
    title: "Hello 👋 my name is",
    name: "Nguyen Xuan Hanh",
  };
  const [loading, setLoading] = useState<boolean>(true);
  const [usingImage, setUsingImage] = useState<boolean>(true);

  return (
    <div className="relative flex flex-row gap-3 h-fit">
      <BannerBg />
      {/* text section */}
      <div className="w-full md:w-fit flex flex-col items-start justify-start px-4  py-8 gap-3 ">
        <div className="relative">
          <div
            className="text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text"
          >
            <p>SOFTWARE</p>
            <p>DEVELOPER</p>
          </div>
        </div>
        <div className="text-2xl md:text-4xl font-bold mt-2 gap-2 mb-6">
          <span>{content.title}</span>
          <br />
          <span
            className="text-3xl md:text-5xl text-transparent 
            bg-gradient-to-tr from-blueOne via-blueTwo to-blueThree bg-clip-text
            "
          >
            {content.name}
          </span>
        </div>
      </div>
      {/* image and social 3d section */}
      <Tooltip>
        <TooltipTrigger className="hidden md:flex w-1/2 flex-1 h-full cursor-pointer min-w-[800px] min-h-[400px]">
          <div>
            {usingImage ? (
              <Image src={BannerImg} alt="banner" priority={true} />
            ) : (
              <>
                {loading && (
                  <div className="w-1/2 h-full absolute top-0 right-0">
                    <Loading />
                  </div>
                )}
                <Spline
                  scene="https://prod.spline.design/8EkkD7ey7Xfz-M-O/scene.splinecode"
                  onLoad={() => setLoading(false)}
                />
              </>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <Button onClick={() => setUsingImage(!usingImage)}>
            {usingImage ? "Use 3D" : "Use Image"}
          </Button>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default HeaderBanner;
