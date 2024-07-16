import React from "react";

interface PrimaryButtonProps {
  text: string;
  handleClick: () => void;
}

const DangerButton: React.FC<PrimaryButtonProps> = ({ text, handleClick }) => {
  return (
    <button className="relative h-fit w-fit" onClick={handleClick}>
      <div className="px-12 py-2 border-4 border-black relative rounded-full z-10">
        <span className="text-3xl font-bold">{text}</span>
      </div>
      <div className="absolute top-2 -left-2.5 w-full h-full bg-background-danger rounded-full z-0" />
    </button>
  );
};

export default DangerButton;
