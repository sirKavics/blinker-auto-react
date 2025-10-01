import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlinkerLogoColor from "../../assets/blinker-logo-color.svg";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img
            src={BlinkerLogoColor}
            alt="Blinker Logo"
            className="blinker__logo"
          />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link link__hover-effect">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/findyourcar" className="nav__link link__hover-effect">
              Find your car
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link btn__contact no-cursor">
              CONTACT
            </a>
          </li>
          <div className="menu__container">
            <button className="btn__menu cursor-pointer">
              <FontAwesomeIcon icon="bars" onClick={openMenu} />
            </button>
          </div>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu cursor-pointer btn__menu--close">
            <FontAwesomeIcon icon="times" onClick={closeMenu} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link link__hover-effect">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/findyourcar" className="menu__link link__hover-effect">
                Find your car
              </a>
            </li>
            <li className="menu__list">
              <a
                href="/"
                className="menu__link--contact btn__contact no-cursor"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
