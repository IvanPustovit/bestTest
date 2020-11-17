import React from "react";
import svgCardOne from "../scss/images/Group 13.svg";
// import "../scss/Main.scss";

const Main = () => {
  return (
    <div className="wrapper">
      <p className="wrapper-name">
        Why{" "}
        <span className="wrapper-name_text"> small business owners love</span>{" "}
        AppCo?
      </p>
      <p className="wrapper-text">
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <div className="card-list">
        <div className="card-main">
          <img src={svgCardOne} alt="" />
          <p className="card-name">Clean Design</p>
          <p className="card-text">
            Increase sales by showing true dynamics of your website.
          </p>
        </div>
        <div className="card-main">
          <img src={svgCardOne} alt="" />
          <p className="card-name">Secure Data</p>
          <p className="card-text">
            Build your online store’s trust using Social Proof & Urgency.
          </p>
        </div>
        <div className="card-main">
          <img src={svgCardOne} alt="" />
          <p className="card-name">Retina Ready</p>
          <p className="card-text">
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
