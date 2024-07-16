import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import TextThemeItem from "../components/TextThemeItem";
import ImageThemeItem from "../components/ImageThemeItem";
import buzz from "../assets/buzz.jpeg";

const MyPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <TextThemeItem text="マイお題１" />
        <div className="flex gap-x-8">
          <div className="w-1/3 h-80">
            <ImageThemeItem
              text="マイお題１"
              imageUrl={buzz}
              linkUrl={"/imagetheme"}
            />
          </div>
          <div className="w-1/3 h-80">
            <ImageThemeItem
              text="マイお題１"
              imageUrl={buzz}
              linkUrl={"/imagetheme"}
            />
          </div>
          <div className="w-1/3 h-80">
            <ImageThemeItem
              text="マイお題１"
              imageUrl={buzz}
              linkUrl={"/imagetheme"}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default MyPage;
