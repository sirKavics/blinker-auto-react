import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarImg from "../assets/image-not-available-template.png";

const CarListing = () => {
  return (
    <>
      <section id="car-listing">
        <div className="car-listing__container">
          <figure className="car-img__container">
            <img src={CarImg} class="car-listing__img" alt="car listing" />
          </figure>
          <div className="car-listing__info--container">
            <div className="social-actions__container">
              <figure className="social-action__btn no-cursor">
                <FontAwesomeIcon icon="share-nodes" />
              </figure>
              <figure className="social-action__btn no-cursor">
                <FontAwesomeIcon icon="heart" />
              </figure>
            </div>
            <div className="car-listing__info--wrapper">
              <div className="car-listing__title--container">
                <div className="car-listing__name light-blue">* Car Brand and Model *</div>
                <div className="car-listing__year light-blue">* Car Year *</div>
                <div className="car-listing__price light-blue">* Car Price *</div>
              </div>
              <div className="car-listing__contact--container">
                <button className="car-listing__message--btn"></button>
                <button className="car-listing__contact--btn"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarListing;
