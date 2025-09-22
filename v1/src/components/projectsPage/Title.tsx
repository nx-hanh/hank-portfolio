import React, { FC } from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-4">
      <div className="w-full flex justify-center items-center mt-4 mb-10">
        <div
          className="text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text"
        >
          <p>{title}</p>
        </div>
      </div>
      <span className="text-lg text-center text-foreground/50">{subtitle}</span>
    </section>
  );
};

export default Title;
