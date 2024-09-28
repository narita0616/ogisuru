import React from "react";
import Main from "../layout/Main";
import Theme from "../containers/ImageTheme/Theme";
import BottomMenu from "../containers/ImageTheme/BottomMenu";

const ImageTheme: React.FC = () => {
  return (
    <Main>
      <div className="relative w-full h-screen">
        <Theme />
        <BottomMenu />
      </div>
    </Main>
  );
};

export default ImageTheme;
