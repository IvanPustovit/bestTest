import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-input">
        <input placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-text">
        <p className="footer-logo">AppCo</p>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </div>
    </div>
  );
};

export default Footer;
