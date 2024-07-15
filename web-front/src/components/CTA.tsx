import React from "react";
import { useNavigate } from "react-router-dom";

interface CtaProps {
  title: string;
  englishTitle: string;
  imageUrl: string;
  linkUrl: string;
}

const Cta: React.FC<CtaProps> = ({
  title,
  englishTitle,
  imageUrl,
  linkUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <img
          className="absolute object-cover h-full border-4 border-black box-border shadow-cta"
          src={imageUrl}
        />
        <div className="absolute bottom-8 flex flex-col px-4">
          <span className="text-4xl font-black text-white">{title}</span>
          <span className="text-xl font-bold text-white">{englishTitle}</span>
          <span className="block w-full h-1 bg-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Cta;
