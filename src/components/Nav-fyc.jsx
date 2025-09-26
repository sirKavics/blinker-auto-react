import React from "react";
import NavBackground from "../assets/car-lot-background-overlay.jpg"
import BlinkerLogoWhite from "../assets/blinker-icon-white.png"

function Navfyc() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="navbar__container">
      <figure>
        <img
          className="navbar__img--overlay"
          src={NavBackground}
          alt=""
        />
      </figure>
      <nav className="nav__fyc">
        <div className="nav__container">
          <figure>
            <img
              className="blinker__logo"
              src={BlinkerLogoWhite}
              alt=""
            />
          </figure>
          <ul className="nav__links">
            <li className="nav__link nav__link--white">
              <a
                href="./index.html"
                className="nav__link--anchor link__hover-effect nav__link--white link__hover-effect--white"
              >
                Home
              </a>
            </li>
            <li className="nav__link">
              <a
                href="./findyourcar.html"
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
          </ul>
        </div>
        <div className="menu__container">
          <button
            className="menu__btn fyc-menu__btn cursor-pointer"
            onclick={openMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="menu__backdrop fyc__menu--backdrop">
            <button
              className="menu__btn fyc-menu__btn cursor-pointer menu__btn--close fyc-menu__btn--close"
              onclick={closeMenu}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a
                  href="./index.html"
                  className="menu__link fyc-menu__link link__hover-effect"
                >
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a
                  href="./findyourcar.html"
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
      <div className="search__container">
        <h1 className="search__title">Browse our cars</h1>
        <div className="search__input--container fyc-search__input--container">
          <form id="search__bar" onsubmit="renderCars()">
            <input
              className="search__input fyc-search__input"
              type="text"
              placeholder="Search your car here"
            />
            <div className="search__toggle--container">
              <div className="search__toggle--bar">
                <div className="toggle__slider"></div>
                <button
                  className="toggle__option toggle__active"
                  onclick="selectOption(0)"
                >
                  Brand
                </button>
                <button className="toggle__option" onclick="selectOption(1)">
                  Model
                </button>
                <button className="toggle__option" onclick="selectOption(2)">
                  Year
                </button>
              </div>
            </div>
            <div className="fyc-btn__search--container">
              <button
                className="btn__search fyc-btn__search"
                onclick="renderCars()"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navfyc;
