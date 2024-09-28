import React from "react";
import { Link } from "react-router-dom";
import TextThemeContent from "../components/TextThemeContent";
import SmallParagraph from "../components/SmallParagraph";
import DefaultParagraph from "../components/DefaultParagraph";
import Main from "../layout/Main";

const TextTheme: React.FC = () => {
  return (
    <Main>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <TextThemeContent
            text={"異世界転生者同士の飲み会あるあるを教えてください"}
          />
        </div>
        <div className="absolute inset-x-0 bottom-4 flex flex-row">
          <div className="basis-1/2">
            <Link to="/">
              <SmallParagraph text="クリックして次へ" />
            </Link>
          </div>
          <div className="basis-1/2 flex flex-row-reverse">
            <DefaultParagraph text="お題提供：名無し" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default TextTheme;
