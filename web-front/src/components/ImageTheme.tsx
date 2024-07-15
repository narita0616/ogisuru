import React from "react";

interface ImageThemeProps {
  imageUrl: string;
}

const ImageTheme: React.FC<ImageThemeProps> = ({ imageUrl }) => {
  return (
    <div>
      <img className="absolute object-cover h-full " src={imageUrl} />
    </div>
  );
};

export default ImageTheme;
