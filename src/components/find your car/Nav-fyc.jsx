import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBackground from "../../assets/car-lot-background-overlay.jpg";
import BlinkerLogoWhite from "../../assets/blinker-logo-white.svg";

const NavFYC = () => {
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
          <figure>
            <img className="blinker__logo" src={BlinkerLogoWhite} alt="" />
          </figure>
          <ul className="nav__links">
            <li className="nav__link nav__link--white">
              <a
                href="/"
                className="nav__link--anchor link__hover-effect nav__link--white link__hover-effect--white"
              >
                Home
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/findyourcar"
                className="nav__link--anchor link__hover-effect nav__link--white link__hover-effect--white"
              >
                Find your car
              </a>
            </li>
            <li className="nav__link">
              <a
                href="/"
                className="nav__link--anchor btn__contact fyc-btn__contact no-cursor"
              >
                CONTACT
              </a>
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
                <a
                  href="/"
                  className="menu__link fyc-menu__link link__hover-effect"
                >
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="/findyourcar"
                  className="menu__link fyc-menu__link link__hover-effect"
                >
                  Find your car
                </a>
              </li>
              <li className="menu__list menu__list--contact">
                <a
                  href="/"
                  className="menu__link--contact btn__contact fyc-btn__contact no-cursor"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavFYC;
