import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import MediumHeading from "../../components/MediumHeading";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginClick = () => {
    alert("ログイン");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const {
    mainHeadingText,
    mediumHeadingText1,
    mediumHeadingText2,
    primaryButtonText,
    secondaryButtonText,
  } = text;

  return (
    <article className="flex flex-col space-y-6">
      <MainHeading text={mainHeadingText} />
      <MediumHeading text={mediumHeadingText1} />
      <TextInput setText={setId} />
      <MediumHeading text={mediumHeadingText2} />
      <TextInput setText={setPassword} />
      <div className="w-full flex flex-col items-center space-y-6">
        <PrimaryButton
          text={primaryButtonText}
          handleClick={handleLoginClick}
        />
        <SecondaryButton
          text={secondaryButtonText}
          handleClick={handleSignUpClick}
        />
      </div>
    </article>
  );
};

const text = {
  mainHeadingText: "ログイン",
  mediumHeadingText1: "ID",
  mediumHeadingText2: "パスワード",
  primaryButtonText: "ログイン",
  secondaryButtonText: "新規登録",
};

export default LoginForm;
