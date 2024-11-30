import ProjectDataTable from "@/components/projectsPage/ProjectDataTable";
import React, { FC } from "react";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* project carousel */}
      {/* projact table */}
      <ProjectDataTable project={project} />
    </section>
  );
};

export default ProjectDetail;
