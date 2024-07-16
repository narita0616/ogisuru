import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <section className="relative w-full h-full cursor-pointer">
      <div className="relative w-full h-full">
        <Link to={linkUrl}>
          <img
            className="absolute object-cover h-full border-4 border-black shadow-cta"
            src={imageUrl}
          />
        </Link>
        <div className="absolute bottom-8 flex flex-col px-4">
          <span className="text-4xl font-black text-white">{title}</span>
          <span className="text-xl font-bold text-white">{englishTitle}</span>
          <span className="block w-full h-1 bg-white"></span>
        </div>
      </div>
    </section>
  );
};

export default Cta;
