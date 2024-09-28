import React from "react";

interface ImageThemeContentProps {
  imageUrl: string;
}

const ImageThemeContent: React.FC<ImageThemeContentProps> = ({ imageUrl }) => {
  return <img className="object-cover h-full" src={imageUrl} />;
};

export default ImageThemeContent;
