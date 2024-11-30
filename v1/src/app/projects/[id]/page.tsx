import React from "react";
import { getProject, getProjects } from "@/lib/actions/project.actions";
import ProjectDetail from "@/components/projectsPage/ProjectDetail";
import TopTitle from "@/components/projectsPage/TopTitle";
import { ArrowLeftIcon } from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  return (
    <main>
      <TopTitle
        icons={<ArrowLeftIcon size={24} />}
        href={"/projects"}
        title={project.name}
        subtitle={project.description}
      />
      <ProjectDetail project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    id: project._id.toString(),
  }));
}
