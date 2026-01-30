import React from "react";
import { Link } from "react-router-dom";

import BlinkerLogoWhite from "../assets/blinker-logo-white.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
          <Link 
            to="#" 
            onClick={scrollToTop}
            className="footer__link link__hover-effect">
            Back to top ↥
          </Link>
          <Link to="/find-your-car" className="footer__link link__hover-effect">
            Find your car
          </Link>
          <Link
            to="/find-your-car"
            className="no-cursor footer__link link__hover-effect"
          >
            About us
          </Link>
          <Link to="/" className="no-cursor footer__link link__hover-effect">
            Contact
          </Link>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__details">
          <p className="footer__copyrights--text">© 2026 Blinker</p>
          <div className="footer__legal">
            <Link className="no-cursor footer__copyrights--text footer__legal--link">
              Terms of service
            </Link>
            <Link className="no-cursor footer__copyrights--text footer__legal--link">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;