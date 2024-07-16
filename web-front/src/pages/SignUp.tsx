import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import SignUpForm from "../containers/SignUp/SignUpForm";

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <SignUpForm />
      </Main>
      <Footer />
    </>
  );
};

export default Login;
