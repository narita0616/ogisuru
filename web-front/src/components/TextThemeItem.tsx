import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import MediumHeading from "./MediumHeading";
import DisabledTextInput from "./DisabledTextInput";
import DangerButton from "./DangerButton";
import TertiaryButton from "./TertiaryButton";
import { Link } from "react-router-dom";

interface ImageThemeItemProps {
  text: string;
  imageUrl: string;
  linkUrl: string;
}

const ImageThemeItem: React.FC<ImageThemeItemProps> = ({
  text,
  imageUrl,
  linkUrl,
}) => {
  const { menuText, mediumHeadingText, dangerButtonText, TertiaryButtonText } =
    contentText;

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative w-full h-full cursor-pointer">
      <div className="relative w-full h-full">
        <Link to={linkUrl}>
          <img
            className="absolute object-cover h-full border-4 border-black shadow-cta"
            src={imageUrl}
          />
        </Link>
        <img
          className="absolute right-3 top-3 h-10 w-10"
          src={hamburger}
          alt="メニュー"
          onClick={toggleMenu}
        ></img>
      </div>

      {isOpen && (
        <div className="absolute top-12 right-4 bg-white border-4 border-black">
          <ul>
            <li
              onClick={openModal}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {menuText}
            </li>
          </ul>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col space-y-6 bg-white px-4 py-2 border-4 border-black max-w-5xl w-full">
            <MediumHeading text={mediumHeadingText} />
            <DisabledTextInput text={text} />
            <div className="w-full flex flex-col items-center space-y-6">
              <DangerButton text={dangerButtonText} handleClick={closeModal} />
              <TertiaryButton
                text={TertiaryButtonText}
                handleClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const contentText = {
  menuText: "マイお題を削除",
  mediumHeadingText: "マイお題削除",
  dangerButtonText: "削除",
  TertiaryButtonText: "閉じる",
};

export default ImageThemeItem;
