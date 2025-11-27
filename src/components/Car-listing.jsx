import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarImg from "../assets/image-not-available-template.png";
import CarDetails from "../components/ui/Car-details.jsx";

const CarListing = ({ car }) => {
  return (
    <>
      <section id="car-listing">
        <div className="car-listing__row">
          <div className="car-listing__directory--container">
            <p className="car-listing__directory">*All Cars* / * Selected Brand* / * Selected Model*</p>
          </div>
          <div className="car-listing__container">
            <figure className="car-img__container">
              <img src={CarImg} className="car-listing__img" alt="car listing" />
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
                  <h1 className="car-listing__name light-blue">
                    {car.car_model_year} {car.car} {car.car_model}
                  </h1>
                  <p className="car-listing__year light-blue">
                    * Car Mileage *
                  </p>
                  <h1 className="car-listing__price light-blue">
                    {car.price}
                  </h1>
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
          <CarDetails />
        </div>
      </section>
    </>
  );
};

export default CarListing;
