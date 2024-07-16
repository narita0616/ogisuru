import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import LoginForm from "../containers/Login/LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <LoginForm />
      </Main>
      <Footer />
    </>
  );
};

export default Login;
