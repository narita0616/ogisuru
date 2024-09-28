import React from "react";
import Main from "../layout/Main";
import Theme from "../containers/TextTheme/Theme";
import BottomMenu from "../containers/TextTheme/BottomMenu";

const TextTheme: React.FC = () => {
  return (
    <Main>
      <div className="relative w-full h-screen">
        <Theme />
        <BottomMenu />
      </div>
    </Main>
  );
};

export default TextTheme;
