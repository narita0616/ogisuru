import React from "react";
import Cta from "../../components/Cta";
import playMyTheme from "../../assets/playMyTheme.jpeg";
import readMyTheme from "../../assets/readMyTheme.jpeg";
import MainHeading from "../../components/MainHeading";

const MyTheme: React.FC = () => {
  const {
    mainHeadingText,
    firstSection,
    firstSection_en,
    secondSection,
    secondSection_en,
  } = text;

  return (
    <article className="flex flex-col space-y-6">
      <MainHeading text={mainHeadingText} />
      <div className="flex gap-x-8">
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={playMyTheme}
            title={firstSection}
            englishTitle={firstSection_en}
            linkUrl="/textthemes"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={readMyTheme}
            title={secondSection}
            englishTitle={secondSection_en}
            linkUrl="/imagetheme"
          />
        </div>
        <div className="w-1/3 h-96"></div>
      </div>
      <div></div>
    </article>
  );
};

const text = {
  mainHeadingText: "マイお題",
  firstSection: "マイお題出題",
  firstSection_en: "PLAY MY THEME",
  secondSection: "マイお題一覧",
  secondSection_en: "READ MY THEME",
};

export default MyTheme;
