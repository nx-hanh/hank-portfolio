"use client";
import React, { FC, Suspense, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import Loading from "@/components/common/Loading";
import { CV_LINK } from "@/lib/config";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import AboutImg from "@/app/assets/images/3dPreview/about.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [usingImage, setUsingImage] = useState<boolean>(true);
  const content = [
    "I am a software engineer based in the Vietnam.",
    "I specialize in building exceptional websites and applications. Currently focused on web development, I'm eager to work with a talented team. Passionate about new technologies, I'm a fast learner and a team player ready for new challenges. Seeking a full-time software engineer position. Interested in collaborating? Reach out!",
  ];
  const resume = CV_LINK;
  return (
    <div
      id="about"
      className="w-full h-fit flex flex-col lg:flex-row justify-center items-center"
    >
      <Tooltip>
        <TooltipTrigger className="relative w-full h-[200px] lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
          <div>
            {usingImage ? (
              <Image src={AboutImg} alt="about" />
            ) : (
              <>
                {loading && (
                  <div className="w-full h-full absolute top-0 right-0">
                    <Loading />
                  </div>
                )}
                <Spline
                  scene="https://prod.spline.design/1Oy2-jHxkrewulmF/scene.splinecode"
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
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start lg:px-6">
        <div className="w-full flex justify-center items-center mt-4 mb-2 lg:mb-6">
          <div
            className="text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text"
          >
            <p>ABOUT ME</p>
          </div>
        </div>
        {content.map((item, index) => (
          <p
            key={index}
            className="text-sm lg:text-xl font-extralight mt-4 text-justify"
          >
            {item}
          </p>
        ))}
        <div className="w-full flex justify-center items-center mt-8">
          <div
            className="flex justify-center items-center cursor-pointer hover:animate-bounce transition-all duration-300 ease-in-out"
            onClick={() => window.open(resume, "_blank")}
          >
            <p
              className="text-lg md:text-2xl font-semibold
            bg-gradient-to-r bg-clip-text text-transparent from-blueOne via-blueTwo to-blueThree
            "
            >
              View my resume
            </p>
            <SquareArrowOutUpRight
              size={24}
              className="inline-block ml-2
                    text-blueThree hover:text-blueTwo transition-all duration-300 ease-in-out
                "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
