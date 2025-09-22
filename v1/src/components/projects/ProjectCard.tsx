"use client";
import { ArrowUpRightFromSquare } from "lucide-react";
import React, { FC } from "react";
import Image from "next/image";
import GithubBadge from "@/components/projects/GithubBadge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const notReady = project.link.deploy === "";
  return (
    <div
      className="relative min-w-full max-w-full lg:min-w-[400px] lg:max-w-[400px] h-[400px] p-[1px] rounded-xl
    bg-gradient-to-br from-green-400 via-blueTwo to-blue-500
    "
    >
      <div
        className="w-full h-full flex flex-col justify-start items-start p-4
                    dark:bg-[#1a202c] bg-[#f8f8f8] rounded-xl"
      >
        <div className="text-[#12A2FF]">{project.type}</div>
        <div className="text-2xl mb-4">{project.name}</div>
        <div className="relative border border-foreground w-full h-1/2 rounded-lg">
          <Image
            src={project.images[0]}
            alt={project.name}
            width={400}
            height={200}
            className="w-full h-full object-contain rounded-lg"
          />
          {notReady && (
            <div className="absolute bottom-1 right-1 text-xs italic text-white bg-[#2b2b2b]">
              This is sample image, project is not hosted yet
            </div>
          )}
        </div>
        <div className="text-md italic mt-4 line-clamp-3">
          {project.description}
        </div>
        <div className="w-full flex-1 flex flex-row justify-between items-end">
          <div className="flex flex-row overflow-x-hidden gap-2">
            {project.base.map((tag, index) => (
              <div key={index} className="text-[#915DFF] font-bold ">
                {tag}
              </div>
            ))}
          </div>
          <div
            className={
              notReady ? "hidden" : `hover:text-[#12A2FF] hover:cursor-pointer `
            }
            onClick={() => window.open(project.link.deploy, "_blank")}
          >
            <ArrowUpRightFromSquare size={24} className="ml-2" />
          </div>
        </div>
      </div>
      <GithubBadge size={80} link={project.link.github} />
    </div>
  );
};

export default ProjectCard;
