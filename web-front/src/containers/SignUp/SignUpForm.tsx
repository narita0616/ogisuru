import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import MediumHeading from "../../components/MediumHeading";
import TextInput from "../../components/TextInput";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleClick = () => {
    navigate("/login");
  };

  const {
    mainHeadingText,
    mediumHeadingText1,
    mediumHeadingText2,
    mediumHeadingText3,
    mediumHeadingText4,
    primaryButtonText,
  } = text;

  return (
    <article className="flex flex-col space-y-6">
      <MainHeading text={mainHeadingText} />
      <MediumHeading text={mediumHeadingText1} />
      <TextInput setText={setId} />
      <MediumHeading text={mediumHeadingText2} />
      <TextInput setText={setUserName} />
      <MediumHeading text={mediumHeadingText3} />
      <TextInput setText={setPassword} />
      <MediumHeading text={mediumHeadingText4} />
      <TextInput setText={setPasswordConfirmation} />
      <div className="w-full flex flex-col items-center space-y-6">
        <PrimaryButton text={primaryButtonText} handleClick={handleClick} />
      </div>
    </article>
  );
};

const text = {
  mainHeadingText: "新規登録",
  mediumHeadingText1: "ID",
  mediumHeadingText2: "ユーザー名",
  mediumHeadingText3: "パスワード",
  mediumHeadingText4: "パスワード（確認用）",
  primaryButtonText: "登録",
};

export default LoginForm;
