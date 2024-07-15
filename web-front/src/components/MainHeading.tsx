import React from "react";

interface MainHeadingProps {
  text: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ text }) => {
  return (
    <h1 className="relative h-fit w-fit">
      <div className="px-12 py-2 border-4 border-black relative z-10">
        <span className="text-3xl font-bold">{text}</span>
      </div>
      <div className="absolute top-2 -left-2.5 w-full h-full bg-background z-0" />
    </h1>
  );
};

export default MainHeading;
