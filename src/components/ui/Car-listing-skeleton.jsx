import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarListingSkeleton = () => {
  return (
    <div className="car-listing__row">
      <div className="car-listing__directory--container">
        <p className="car-listing__directory">
          *All Cars* / * Selected Brand* / * Selected Model*
        </p>
      </div>
      <div className="car-listing__container">
        <figure className="car-img__container">
          <div
            className="car-listing__img--skeleton skeleton"
            alt="car listing"
          ></div>
        </figure>
        <div className="car-listing__info--container">
          <div className="social-actions__container">
            <button className="social-action__btn no-cursor">
              <FontAwesomeIcon icon="share-nodes" />
            </button>
            <button className="social-action__btn no-cursor">
              <FontAwesomeIcon icon="heart" />
            </button>
          </div>
          <div className="car-listing__info--wrapper">
            <div className="car-listing__title--container">
              <div className="car-listing__name--skeleton skeleton light-blue"></div>
              <div className="car-listing__year--skeleton skeleton light-blue"></div>
              <div className="car-listing__price--skeleton skeleton light-blue"></div>
            </div>
            <div className="car-listing__contact--container">
              <button className="car-listing__btn no-cursor">
                Get started
              </button>
              <button className="car-listing__btn no-cursor">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="car-listing__details--container">
        <div className="car-listing__details--card">
          <h1 className="car-listing__details--title">Vehicle Details</h1>
          <div className="car-listing__specs--container">
            <div className="car-listing__spec-skeleton skeleton"></div>
            <div className="car-listing__spec-skeleton skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListingSkeleton;
