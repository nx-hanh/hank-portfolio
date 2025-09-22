"use client";
import React, { FC } from "react";
import Title from "@/components/projectsPage/Title";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface TopTitleProps {
  icons: React.ReactNode;
  href: string;
  title: string;
  subtitle: string;
}

const TopTitle: FC<TopTitleProps> = ({ icons, href, title, subtitle }) => {
  const router = useRouter();
  return (
    <section className="w-full flex flex-row justify-between items-center">
      <Button variant={"ghost"} onClick={() => router.push(href)}>
        {icons}
      </Button>
      <Title title={title} subtitle={subtitle} />
      <div className="w-12"></div>
    </section>
  );
};

export default TopTitle;
