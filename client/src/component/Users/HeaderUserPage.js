import React from "react";
import { Link } from "react-router-dom";
import "../../scss/Stats.scss";

const HeaderUserPage = () => {
  return (
    <div className="stat-header">
      <Link className="stat-header_logo" to="/">
        AppCo
      </Link>
    </div>
  );
};

export default HeaderUserPage;
