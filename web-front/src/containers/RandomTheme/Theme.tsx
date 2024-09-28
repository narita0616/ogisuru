import React from "react";
import RandamThemeContent from "../../components/RandamThemeContent";

const Theme: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full">
      <div className="flex flex-row w-full">
        <div className="basis-1/3 flex items-center justify-center">
          <RandamThemeContent text="イーロンマスクが"></RandamThemeContent>
        </div>
        <div className="basis-1/3 flex items-center justify-center">
          <RandamThemeContent text="妊娠した"></RandamThemeContent>
        </div>
        <div className="basis-1/3 flex items-center justify-center">
          <RandamThemeContent text="驚きの理由とは？"></RandamThemeContent>
        </div>
      </div>
    </div>
  );
};

export default Theme;
