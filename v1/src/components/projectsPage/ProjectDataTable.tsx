import React, { FC } from "react";
import { Separator } from "@/components/ui/separator";
import ProjectDataTableRow from "@/components/projectsPage/ProjectDataTableRow";
import { Badge } from "@/components/ui/badge";
import ActionButton from "@/components/projectsPage/ActionButton";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, FileSearchIcon, ScreenShareIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectDataTableProps {
  project: Project;
}
const Features = ({ features }: { features: Project["features"] }) => {
  return (
    <div className="flex flex-col">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <div className="mr-2">•</div>
          <div>{feature}</div>
        </div>
      ))}
    </div>
  );
};
const TeachStack = ({
  core,
  base,
}: {
  core: Project["core"];
  base: Project["base"];
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="mr-2">-</div>
        <div>
          FrontEnd: <i>{core.frontEnd}</i>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">-</div>
        <div>
          BackEnd: <i>{core.backEnd}</i>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">-</div>
        <div>
          Database: <i>{core.database}</i>
        </div>
      </div>
      <div className="font-semibold flex flex-row gap-3 flex-wrap w-full mt-2 ">
        {base.map((tech, index) => (
          <Badge
            variant={"outline"}
            className="pointer-events-none"
            key={index}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
const Link = ({ links }: { links: Project["link"] }) => {
  return (
    <div className="flex flex-row gap-4">
      <ActionButton
        label="GitHub"
        href={links.github}
        icon={<GitHubLogoIcon />}
        disabled={links.github === ""}
      />
      <ActionButton
        label="Demo"
        href={links.deploy}
        disabled={links.deploy === ""}
        icon={<ScreenShareIcon size={16} />}
      />
      <ActionButton
        label="UI Design"
        href={links.design}
        disabled={links.design === ""}
        icon={<ComponentIcon size={16} />}
      />
      <ActionButton
        label="Documentation"
        href={links.docs}
        disabled={links.docs === ""}
        icon={<FileSearchIcon size={16} />}
      />
    </div>
  );
};
const ProjectDataTable: FC<ProjectDataTableProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-projectTable auto-rows-min">
      <div className="row-start-1 row-span-7 col-start-1 flex justify-center items-center mx-5">
        <Carousel className="w-[450px] sm:w-[500px] shadow-xl ">
          <CarouselNext />
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="w-[400px] sm:w-[450px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    unoptimized
                    src={image}
                    alt="Image"
                    fill
                    className="rounded-md object-contain shadow-xl bg-transparent"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
        </Carousel>
      </div>
      <ProjectDataTableRow label="Name" data={project.name} isStart={true} />
      <ProjectDataTableRow label="Description" data={project.description} />
      <ProjectDataTableRow label="Platform" data={project.platform} />
      <ProjectDataTableRow label="Type" data={project.type} />
      <ProjectDataTableRow
        label="Features"
        data={<Features features={project.features} />}
      />
      <ProjectDataTableRow
        label="Tech Stack"
        data={<TeachStack core={project.core} base={project.base} />}
      />
      <ProjectDataTableRow label="Links" data={<Link links={project.link} />} />
      <div className="row-start-1 row-span-7 col-start-3 flex justify-center items-center">
        <Separator orientation="vertical" />
      </div>
    </div>
  );
};

export default ProjectDataTable;
