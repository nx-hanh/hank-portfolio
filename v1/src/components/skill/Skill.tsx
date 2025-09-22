"use client";
import React, { FC, use, useEffect, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import Loading from "@/components/common/Loading";
import { Application } from "@splinetool/runtime";
import { SplineEvent } from "@splinetool/react-spline";
import SkillsImg from "@/app/assets/images/3dPreview/skills.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useClientMediaQuery } from "@/hooks/useMediaQuery";

interface SkillProps {}

const Skill: FC<SkillProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [conversation, setConversation] = useState<string>(
    "More joyful when 3D with hover effect."
  );
  const conversationMap: { [key: string]: string } = {
    Html: "Who doesn't know HTML? It's the web's foundation.",
    Css: "What web developer doesn't know CSS? Essential skill.",
    Javascript: "Javascript, the language of the web. I love it.",
    Typescript: "Typescript is Javascript with superpowers. I love it.",
    React: "React, I'm very confident with it.",
    TailwindCSS: "TailwindCSS, I love it. Simple and powerful.",
    NodeJS: "NodeJS, especially with Express. I love it.",
    MongoDB: "MongoDB, NoSQL database. Most of my projects use it.",
    SQLServer: "SQLServer, I love it.",
    Git: "Git, can't do without it.",
    CSharp: "CSharp, I love it.",
    Redux: "Redux, state management for React. I love it.",
    Slack: "Slack, I can work with it.",
    ReactNative: "React Native, just started learning it.",
  };

  const onLoad = (e: Application) => {
    setLoading(false);
  };
  const onMouseHover = (e: SplineEvent) => {
    const text = conversationMap[e.target.name];
    setConversation(text);
  };
  const [usingImage, setUsingImage] = useState<boolean>(true);
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isMobile) {
      setUsingImage(false);
    }
  }, [isMobile]);
  return (
    <div
      id="skills"
      className="w-full min-h-[4[00px] flex flex-col justify-center items-center mb-16 lg:mb-0"
    >
      <div className="w-full flex justify-center items-center mt-4 mb-6">
        <div
          className="text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text"
        >
          <p>SKILLS</p>
        </div>
      </div>
      <Tooltip>
        <TooltipTrigger className="relative w-full h-[200px] lg:h-svh flex flex-col justify-center items-center">
          <>
            {usingImage ? (
              <Image src={SkillsImg} alt="about" />
            ) : (
              <>
                {loading && (
                  <div className="w-full h-full absolute top-0 right-0">
                    <Loading />
                  </div>
                )}
                <Spline
                  scene="https://prod.spline.design/sb9tBNCHlFG42tXi/scene.splinecode"
                  onLoad={onLoad}
                  onMouseHover={onMouseHover}
                />
              </>
            )}
            <div className="absolute top-[100%] lg:top-[150px] mx-auto w-[220px] px-2 h-[70px] lg:border-[1.5px] rounded-lg border-blueOne  flex justify-center items-center text-sm text-center text-blueOne font-semibold pointer-events-none">
              {conversation}
            </div>
          </>
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

export default Skill;
