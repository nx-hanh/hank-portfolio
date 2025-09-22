import ProjectCard from "@/components/projects/ProjectCard";
import React, { FC } from "react";
interface ProjectListProps {
  projects: Project[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const data = projects.length ? projects : [];
  return (
    <div className="w-full max-w-full h-[450px] flex flex-row justify-start items-center overflow-x-auto gap-8">
      {data.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
