import React from "react";

interface MediumHeadingProps {
  text: string;
}

const MediumHeading: React.FC<MediumHeadingProps> = ({ text }) => {
  return (
    <h2 className="h-fit w-fit">
      <div className="px-12 py-2 border-l-4 border-black">
        <span className="text-3xl font-bold">{text}</span>
      </div>
    </h2>
  );
};

export default MediumHeading;
