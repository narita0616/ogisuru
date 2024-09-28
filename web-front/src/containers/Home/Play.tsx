import React from "react";
import Cta from "../../components/Cta";
import textTheme from "../../assets/textTheme.jpeg";
import imageTheme from "../../assets/imageTheme.jpeg";
import randamTheme from "../../assets/randamTheme.jpeg";
import MainHeading from "../../components/MainHeading";

const Play: React.FC = () => {
  const {
    mainHeadingText,
    firstSection,
    firstSection_en,
    secondSection,
    secondSection_en,
    thirdSection,
    thirdSection_en,
  } = text;

  return (
    <article className="flex flex-col space-y-6">
      <MainHeading text={mainHeadingText} />
      <div className="flex gap-x-8">
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={textTheme}
            title={firstSection}
            englishTitle={firstSection_en}
            linkUrl="/textthemes"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={imageTheme}
            title={secondSection}
            englishTitle={secondSection_en}
            linkUrl="/imagetheme"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={randamTheme}
            title={thirdSection}
            englishTitle={thirdSection_en}
            linkUrl="/randomtheme"
          />
        </div>
      </div>
    </article>
  );
};

const text = {
  mainHeadingText: "大喜利で遊ぶ",
  firstSection: "テキストお題",
  firstSection_en: "TEXT",
  secondSection: "画像お題",
  secondSection_en: "IMAGE",
  thirdSection: "ランダムお題",
  thirdSection_en: "RANDOM",
};

export default Play;
