import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import About from "../containers/Home/About";
import Play from "../containers/Home/Play";
import Theme from "../containers/Home/Theme";
import MyTheme from "../containers/Home/MyTheme";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
        <Play />
        <Theme />
        <MyTheme />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
