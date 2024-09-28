import React from "react";
import Main from "../layout/Main";
import Theme from "../containers/RandomTheme/Theme";
import BottomMenu from "../containers/RandomTheme/BottomMenu";

const RandomTheme: React.FC = () => {
  return (
    <Main>
      <div className="relative w-full h-screen">
        <Theme />
        <BottomMenu />
      </div>
    </Main>
  );
};

export default RandomTheme;
