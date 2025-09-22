import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface ProjectDataTableRowProps {
  label: string | React.ReactNode;
  data: string | React.ReactNode;
  isStart?: boolean;
}

const ProjectDataTableRow: FC<ProjectDataTableRowProps> = ({
  label,
  data,
  isStart = false,
}) => {
  const showSeparator = !isStart;
  return (
    <>
      <div className="col-start-2 flex flex-col items-end justify-between my-1 font-semibold">
        <div className="w-fit">
          {showSeparator && <Separator />}
          <div className="ml-4 mt-2">{label}</div>
        </div>
      </div>
      <div className="col-start-4 my-1">
        <div className="w-fit">
          {showSeparator && <Separator />}
          <div className="mr-4 mt-2">{data}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectDataTableRow;
