import React from "react";

interface TextThemeProps {
  text: string;
}

const TextTheme: React.FC<TextThemeProps> = ({ text }) => {
  return <p className="text-4xl font-bold leading-relaxed">{text}</p>;
};

export default TextTheme;
