import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBackground from "../assets/car-lot-background-overlay.jpg";
import BlinkerLogoWhite from "../assets/blinker-logo-white.svg";

const NavFYC = ({ onReset }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="navbar__container">
      <figure>
        <img className="navbar__img--overlay" src={NavBackground} alt="" />
      </figure>
      <nav className="nav__fyc">
        <div className="nav__container">
          <Link to ="/">
            <img className="blinker__logo fyc-blinker__logo" src={BlinkerLogoWhite} alt="" />
          </Link>
          <ul className="nav__links">
            <li className="nav__link nav__link--white">
              <Link to="/"
                className="nav__link--anchor link__hover-effect nav__link--white link__hover-effect--white"
              >
                Home
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/find-your-car"
                className="nav__link--anchor link__hover-effect nav__link--white link__hover-effect--white"
                onClick={onReset}
              >
                Find your car
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/"
                className="nav__link--anchor btn__contact fyc-btn__contact no-cursor"
              >
                CONTACT
              </Link>
            </li>
            <div className="menu__container">
              <button className="btn__menu fyc-menu__btn cursor-pointer">
                <FontAwesomeIcon icon="bars" onClick={openMenu} />
              </button>
            </div>
          </ul>
          <div className="menu__backdrop fyc__menu--backdrop">
            <button className="btn__menu fyc-menu__btn cursor-pointer btn__menu--close fyc-menu__btn--close">
              <FontAwesomeIcon icon="times" onClick={closeMenu} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/"
                  className="menu__link fyc-menu__link link__hover-effect"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/find-your-car"
                  className="menu__link fyc-menu__link link__hover-effect"
                  onClick={() => {
                    onReset();
                    closeMenu();
                  }}
                >
                  Find your car
                </Link>
              </li>
              <li className="menu__list menu__list--contact">
                <Link to="/"
                  className="menu__link--contact btn__contact fyc-btn__contact no-cursor"
                  onClick={closeMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavFYC;
