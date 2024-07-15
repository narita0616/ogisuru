import React from "react";

interface LargeParagraphProps {
  text: string;
}

const LargeParagraph: React.FC<LargeParagraphProps> = ({ text }) => {
  return <p className="text-3xl font-bold">{text}</p>;
};

export default LargeParagraph;
