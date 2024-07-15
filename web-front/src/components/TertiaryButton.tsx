import React from "react";

interface TertiaryButtonProps {
  text: string;
  handleClick: () => void;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({
  text,
  handleClick,
}) => {
  return (
    <button className="h-fit w-fit" onClick={handleClick}>
      <div className="px-12 py-2 border-b-4 border-black">
        <span className="text-3xl font-bold">{text}</span>
      </div>
    </button>
  );
};

export default TertiaryButton;
