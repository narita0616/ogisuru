import React from "react";

interface SmallParagraphProps {
  text: string;
}

const SmallParagraph: React.FC<SmallParagraphProps> = ({ text }) => {
  return <p className="text-base font-bold opacity-60">{text}</p>;
};

export default SmallParagraph;
