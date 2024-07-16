import React from "react";

interface SmallParagraphProps {
  text: string;
}

const SmallParagraph: React.FC<SmallParagraphProps> = ({ text }) => {
  return <p className="text-base font-bold text-text-small">{text}</p>;
};

export default SmallParagraph;
