import ActionButton from "@/components/projectsPage/ActionButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";
import {
  GithubIcon,
  ScreenShareIcon,
  CircleArrowRightIcon,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="w-[400px] h-fit mb-10">
      <Card>
        <CardHeader>
          <Image
            unoptimized
            src={project.images[0]}
            alt={project.name}
            width={400}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2">{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-6">
          <ActionButton
            label="Github"
            href={project.link.github}
            icon={<GithubIcon size={24} />}
            disabled={project.link.github === ""}
          />
          <ActionButton
            label="Demo"
            href={project.link.deploy}
            icon={<ScreenShareIcon size={24} />}
            disabled={project.link.deploy === ""}
          />
          <ActionButton
            label="Details"
            href={`/projects/${project._id}`}
            icon={<CircleArrowRightIcon size={24} />}
          />
        </CardFooter>
      </Card>
    </article>
  );
};

export default ProjectCard;
