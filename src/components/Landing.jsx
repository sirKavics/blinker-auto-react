import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
import CarChassi from "../assets/ani-car-chassi.svg";
import CarWheel from "../assets/ani-wheel.svg";
import Road from "../assets/ani-road.svg";
import TreeAndLights from "../assets/ani-tree-and-lights.svg";
import City from "../assets/ani-city.svg";
import Clouds from "../assets/ani-clouds.svg";
import Sun from "../assets/ani-sun.svg"

function Landing() {
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
            <a href="/">
              <button className="btn__search">BROWSE CARS</button>
            </a>
          </div>
        </div>
<<<<<<< HEAD
        <div className="landing__animation--row">
          <div class="animation__content">
            <div className="car__container">
              <img
                className="car-chassi"
=======
        <div class="landing__animation--row">
          <div class="animation__content">
            <div class="car__container">
              <img
                class="car-chassi"
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
                src={CarChassi}
                alt=""
              />
              <img
<<<<<<< HEAD
                className="car-wheel__img car-wheel__front"
=======
                class="car-wheel__img car-wheel__front"
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
                src={CarWheel}
                alt=""
              />
              <img
<<<<<<< HEAD
                className="car-wheel__img car-wheel__rear"
=======
                class="car-wheel__img car-wheel__rear"
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
                src={CarWheel}
                alt=""
              />
            </div>
<<<<<<< HEAD
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
=======
            <div class="road__container">
              <div class="road__slide">
                <img class="road__img" src={Road} alt="" />
              </div>
              <div class="road__slide">
                <img class="road__img" src={Road} alt="" />
              </div>
            </div>
            <div class="tree-and-lights__container">
              <div class="tree-and-lights__slide">
                <img
                  class="tree-and-lights__img"
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
                  src={TreeAndLights}
                  alt=""
                />
              </div>
<<<<<<< HEAD
              <div className="tree-and-lights__slide">
                <img
                  className="tree-and-lights__img"
=======
              <div class="tree-and-lights__slide">
                <img
                  class="tree-and-lights__img"
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
                  src={TreeAndLights}
                  alt=""
                />
              </div>
            </div>
<<<<<<< HEAD
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
=======
            <div class="city__container">
              <div class="city__slide">
                <img class="city__img" src={City} alt="" />
              </div>
              <div class="city__slide">
                <img class="city__img" src={City} alt="" />
              </div>
            </div>
            <div class="clouds__container">
              <div class="clouds__slide">
                <img class="clouds__img" src={Clouds} alt="" />
              </div>
              <div class="clouds__slide">
                <img class="clouds__img" src={Clouds} alt="" />
              </div>
            </div>
            <div class="sun__container">
              <img class="sun__img" src={Sun} alt="" />
>>>>>>> 88d47d1fcdcd582ab386c445ea60fbf0888c78c1
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
