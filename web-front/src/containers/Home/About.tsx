import React from "react";
import MainHeading from "../../components/MainHeading";
import DefaultParagraph from "../../components/DefaultParagraph";
import LargeParagraph from "../../components/LargeParagraph";

const About: React.FC = () => {
  const {
    mainHeadingText,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    fourthParagraph,
  } = text;

  return (
    <article className="flex flex-col space-y-6">
      <MainHeading text={mainHeadingText} />
      <DefaultParagraph text={firstParagraph} />
      <DefaultParagraph text={secondParagraph} />
      <DefaultParagraph text={thirdParagraph} />
      <LargeParagraph text={fourthParagraph} />
    </article>
  );
};

const text = {
  mainHeadingText: "おだいばについて",
  firstParagraph:
    "おだいばとは、より臨場感をもって大喜利で遊んでほしいという思いを込められて作られた大喜利プラットフォームです。",
  secondParagraph:
    "テキスト大喜利、画像大喜利、ランダムな文字大喜利で遊ぶことができます。",
  thirdParagraph:
    "ユーザー登録をすれば、気に入ったお題を集めたり、知り合いにお題提供してもらったり、より大喜利を楽しめる機能を使うことができます。",
  fourthParagraph: "あとは使っていくうちにわかるはず！ぜひお楽しみください！",
};

export default About;
