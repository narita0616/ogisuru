import React from "react";
import { Link } from "react-router-dom";
import SmallParagraph from "../../components/SmallParagraph";
import DefaultParagraph from "../../components/DefaultParagraph";

const BottomMenu: React.FC = () => {
  return (
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
  );
};

export default BottomMenu;
