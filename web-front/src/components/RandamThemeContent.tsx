import React from "react";

interface RandamThemeContentProps {
  text: string;
}

const RandamThemeContent: React.FC<RandamThemeContentProps> = ({ text }) => {
  return (
    <p className="text-4xl font-bold leading-relaxed text-center">{text}</p>
  );
};

export default RandamThemeContent;
