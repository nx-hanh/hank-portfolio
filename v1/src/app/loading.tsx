import LoadingComponent from "@/components/common/Loading";
import React, { FC } from "react";

interface pageProps {}

const Loading: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen w-screen">
      <LoadingComponent />
    </div>
  );
};

export default Loading;
