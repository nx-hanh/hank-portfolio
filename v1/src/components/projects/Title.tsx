"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC, use } from "react";

interface TitleProps {}

const Title: FC<TitleProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-full flex justify-start items-center mt-4 mb-10">
        <div
          className="text-4xl md:text-7xl font-semibold 
bg-gradient-to-r bg-clip-text  text-transparent 
from-green-400 via-blueTwo to-blue-500
animate-text"
        >
          <p>PROJECTS</p>
        </div>
      </div>
      <Button
        variant={"outline"}
        onClick={() => router.push("/projects")}
        className="flex items-center gap-2"
      >
        <span className="mb-[2px]">View All</span>
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default Title;
