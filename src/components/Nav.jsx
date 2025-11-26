import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlinkerLogoColor from "../assets/blinker-logo-color.svg";

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
        <Link to="/">
          <img
            src={BlinkerLogoColor}
            alt="Blinker Logo"
            className="blinker__logo"
          />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link link__hover-effect">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/findyourcar" className="nav__link link__hover-effect">
              Find your car
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link btn__contact no-cursor">
              CONTACT
            </Link>
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
              <Link
                to="/"
                className="menu__link link__hover-effect"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/findyourcar"
                className="menu__link link__hover-effect"
                onClick={closeMenu}
              >
                Find your car
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/"
                className="menu__link--contact btn__contact no-cursor"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
