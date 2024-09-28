import React from "react";

interface TextThemeContentProps {
  text: string;
}

const TextThemeContent: React.FC<TextThemeContentProps> = ({ text }) => {
  return <p className="text-4xl font-bold leading-relaxed">{text}</p>;
};

export default TextThemeContent;
