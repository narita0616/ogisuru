import React from "react";
import Cta from "../../components/Cta";
import textTheme from "../../assets/textTheme.jpeg";

const About: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-8">
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={textTheme}
            title="テキストお題"
            englishTitle="TEXT"
            linkUrl="/another-page"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={textTheme}
            title="テキストお題"
            englishTitle="TEXT"
            linkUrl="/another-page"
          />
        </div>
        <div className="w-1/3 h-96">
          <Cta
            imageUrl={textTheme}
            title="テキストお題"
            englishTitle="TEXT"
            linkUrl="/another-page"
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default About;
