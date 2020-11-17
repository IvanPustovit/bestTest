import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main";
import "../scss/Main.scss";

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
