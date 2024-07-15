import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import About from "../containers/Home/About";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
