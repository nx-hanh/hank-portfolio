import ListProject from "@/components/projectsPage/ListProject";
import TopTitle from "@/components/projectsPage/TopTitle";
import { getProjects } from "@/lib/actions/project.actions";
import { NXH } from "@/lib/config";
import { HomeIcon } from "lucide-react";
import React, { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = async () => {
  const projects = JSON.parse(JSON.stringify(await getProjects()));
  return (
    <main>
      {/*top title */}
      <TopTitle
        icons={<HomeIcon size={24} />}
        href={"/"}
        title={"-- PROJECTS --"}
        subtitle={"Things I've built so far – check them out!"}
      />
      {/* project cards */}
      <ListProject projects={projects} />
    </main>
  );
};

export default Projects;
