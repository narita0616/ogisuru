import React from "react";

interface SecondaryButtonProps {
  text: string;
  handleClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  handleClick,
}) => {
  return (
    <button className="h-fit w-fit" onClick={handleClick}>
      <div className="px-12 py-2 border-4 border-black rounded-full bg-white">
        <span className="text-3xl font-bold">{text}</span>
      </div>
    </button>
  );
};

export default SecondaryButton;
