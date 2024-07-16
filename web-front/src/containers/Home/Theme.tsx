import React from "react";
import Cta from "../../components/Cta";
import postTheme from "../../assets/postTheme.jpeg";
import readTheme from "../../assets/readTheme.jpeg";
import MainHeading from "../../components/MainHeading";

const Theme: React.FC = () => {
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
            imageUrl={postTheme}
            title={firstSection}
            englishTitle={firstSection_en}
            linkUrl="/textthemes"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={readTheme}
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
  mainHeadingText: "お題",
  firstSection: "お題投稿",
  firstSection_en: "POST",
  secondSection: "お題一覧",
  secondSection_en: "READ",
};

export default Theme;
