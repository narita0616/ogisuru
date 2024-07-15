import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import MainHeading from "../components/MainHeading";
import MediumHeading from "../components/MediumHeading";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import TertiaryButton from "../components/TertiaryButton";
import TextInput from "../components/TextInput";
import DisabledTextInput from "../components/DisabledTextInput";
import PullDown from "../components/PullDown";
import Checkbox from "../components/Checkbox";
import DefaultParagraph from "../components/DefaultParagraph";
import LargeParagraph from "../components/LargeParagraph";
import SmallParagraph from "../components/SmallParagraph";
import About from "../containers/Home/About";

const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [pullDownItems] = useState<Array<string>>([
    "りんご",
    "ごりら",
    "らっぱ",
  ]);
  const [selectedPullDownItems, setSelectedPullDownItems] =
    useState<string>("");

  const handleClick = (): void => {
    console.log("テスト");
  };

  return (
    <>
      <Header />
      <Main>
        <MainHeading text="テキストお題" />
        <MediumHeading text="テキストお題" />
        <PrimaryButton text="テキストお題" handleClick={handleClick} />
        <SecondaryButton text="テキストお題" handleClick={handleClick} />
        <TertiaryButton text="テキストお題" handleClick={handleClick} />
        <TextInput setText={setText} />
        <DisabledTextInput text={text} />
        <PullDown
          items={pullDownItems}
          setSelectedPullDownItems={setSelectedPullDownItems}
        />
        <DisabledTextInput text={selectedPullDownItems} />
        <Checkbox
          label="チェックボックスの名前"
          setChecked={setIsChecked}
          checked={isChecked}
        />
        <DefaultParagraph text={"こんにちは"} />
        <LargeParagraph text={"こんにちは"} />
        <SmallParagraph text={"こんにちは"} />
        <About />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
