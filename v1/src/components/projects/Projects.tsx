import ProjectList from "@/components/projects/ProjectList";
import Title from "@/components/projects/Title";
import { getProjects } from "@/lib/actions/project.actions";
import React, { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = async ({}) => {
  const projects = JSON.parse(JSON.stringify(await getProjects()));
  return (
    <div
      id="projects"
      className="w-full h-full flex flex-col justify-center items-center mt-8"
    >
      <Title />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
