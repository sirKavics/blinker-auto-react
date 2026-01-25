import React from "react";
import { Link } from "react-router-dom";

import BlinkerLogoWhite from "../assets/blinker-logo-white.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container--wrapper">
        <div className="footer__blinker-logo--container">
          <img
            src={BlinkerLogoWhite}
            alt="Blinker Icon"
            className="footer__blinker-icon"
          />
        </div>
        <div className="footer__links--container">
          <Link to="/" className="footer__link footer__link link__hover-effect">
            Back to top
          </Link>
          <Link to="/find-your-car" className="footer__link footer__link link__hover-effect">
            Find your car
          </Link>
          <Link to="/" className="footer__link footer__link link__hover-effect">
            Contact
          </Link>
        </div>
        <p className="footer__copyrights--text">
          Copyright © 2026 Blinker
        </p>
      </div>
    </div>
  );
};

export default Footer;
