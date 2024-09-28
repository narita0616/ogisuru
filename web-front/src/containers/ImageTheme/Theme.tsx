import React from "react";
import ImageThemeContent from "../../components/ImageThemeContent";
import imageURL from "../../assets/moroha.jpg";

const Theme: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-3/5 max-w-full">
        <ImageThemeContent imageUrl={imageURL} />
      </div>
    </div>
  );
};

export default Theme;
