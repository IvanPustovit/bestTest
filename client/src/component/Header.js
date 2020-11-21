import React from "react";
import { Link } from "react-router-dom";
import phone from "../scss/images/phone.png";

const Header = () => {
  return (
    <div className="main-header">
      <Link className="logo" to="/">
        AppCo
      </Link>

      <div className="items">
        <p className="items_name">
          Brainstorming{" "}
          <span className="items_item"> for desired perfect Usability</span>
        </p>
        <p className="items-text">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <form action="/stats">
          <button className="items-button">Views Stats</button>
        </form>
      </div>
      <div>
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
};

export default Header;
