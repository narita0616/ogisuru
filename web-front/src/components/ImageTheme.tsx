import React from "react";

interface ImageThemeProps {
  imageUrl: string;
}

const ImageTheme: React.FC<ImageThemeProps> = ({ imageUrl }) => {
  return <img className="object-cover h-full" src={imageUrl} />;
};

export default ImageTheme;
