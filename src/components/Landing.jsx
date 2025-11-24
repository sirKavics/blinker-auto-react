import React from "react";
import { Link } from "react-router-dom";

import CarChassi from "../assets/ani-car-chassi.svg";
import CarWheel from "../assets/ani-wheel.svg";
import Road from "../assets/ani-road.svg";
import TreeAndLights from "../assets/ani-tree-and-lights.svg";
import City from "../assets/ani-city.svg";
import Clouds from "../assets/ani-clouds.svg";
import Sun from "../assets/ani-sun.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__content">
          <h1 className="title">
            Portugal's most awarded
            <br />
            car subscription platform
          </h1>
          <h2 className="sub-title light-blue">
            FIND YOUR DREAM CAR WITH <span className="blue">BLINKER</span>
          </h2>
          <div className="search__input--wrapper">
            <Link to="/findyourcar">
              <button className="btn__search">BROWSE CARS</button>
            </Link>
          </div>
        </div>
        <div className="landing__animation--row">
          <div className="animation__content">
            <div className="car__container">
              <img
                className="car-chassi"
                src={CarChassi}
                alt=""
              />
              <img
                className="car-wheel__img car-wheel__front"
                src={CarWheel}
                alt=""
              />
              <img
                className="car-wheel__img car-wheel__rear"
                src={CarWheel}
                alt=""
              />
            </div>
            <div className="road__container">
              <div className="road__slide">
                <img className="road__img" src={Road} alt="" />
              </div>
              <div className="road__slide">
                <img className="road__img" src={Road} alt="" />
              </div>
            </div>
            <div className="tree-and-lights__container">
              <div className="tree-and-lights__slide">
                <img
                  className="tree-and-lights__img"
                  src={TreeAndLights}
                  alt=""
                />
              </div>
              <div className="tree-and-lights__slide">
                <img
                  className="tree-and-lights__img"
                  src={TreeAndLights}
                  alt=""
                />
              </div>
            </div>
            <div className="city__container">
              <div className="city__slide">
                <img className="city__img" src={City} alt="" />
              </div>
              <div className="city__slide">
                <img className="city__img" src={City} alt="" />
              </div>
            </div>
            <div className="clouds__container">
              <div className="clouds__slide">
                <img className="clouds__img" src={Clouds} alt="" />
              </div>
              <div className="clouds__slide">
                <img className="clouds__img" src={Clouds} alt="" />
              </div>
            </div>
            <div className="sun__container">
              <img className="sun__img" src={Sun} alt="" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
