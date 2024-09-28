import React from "react";
import { Link } from "react-router-dom";
import ImageThemeContent from "../components/ImageThemeContent";
import SmallParagraph from "../components/SmallParagraph";
import DefaultParagraph from "../components/DefaultParagraph";
import Main from "../layout/Main";
import buzz from "../assets/moroha.jpg";

const ImageTheme: React.FC = () => {
  return (
    <Main>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3/5 max-w-full">
            <ImageThemeContent imageUrl={buzz} />
          </div>
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

export default ImageTheme;
