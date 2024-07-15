import React from "react";

interface DefaultParagraphProps {
  text: string;
}

const DefaultParagraph: React.FC<DefaultParagraphProps> = ({ text }) => {
  return <p className="text-xl font-bold">{text}</p>;
};

export default DefaultParagraph;
