import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarImg from "../assets/image-not-available-template.png";

const CarListing = () => {
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
                <figure className="social-action__btn no-cursor">
                  <FontAwesomeIcon icon="share-nodes" />
                </figure>
                <figure className="social-action__btn no-cursor">
                  <FontAwesomeIcon icon="heart" />
                </figure>
              </div>
              <div className="car-listing__info--wrapper">
                <div className="car-listing__title--container">
                  <h1 className="car-listing__name light-blue">
                    * Car Year, Brand and Model *
                  </h1>
                  <p className="car-listing__year light-blue">
                    * Car Mileage *
                  </p>
                  <h1 className="car-listing__price light-blue">
                    * Car Price *
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
          <div className="car-listing__specs--container">
            <div className="car-listing__details--card">
              <h1 className="car-listing__details--title">Vehicle Details</h1>
              <div className="car-listing__specs--container">
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="gauge-high" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">MPG</p>
                    <p className="car-listing__spec--description">*MPG* city, *MPG* hwy</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="gas-pump" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Fuel type</p>
                    <p className="car-listing__spec--description">*FUEL TYPE*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="spray-can-sparkles" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Exterior color</p>
                    <p className="car-listing__spec--description">*CAR COLOR*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="gears" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Transmission</p>
                    <p className="car-listing__spec--description">*TRANSMISSION*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="arrows-spin" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Drivetrain</p>
                    <p className="car-listing__spec--description">*DRIVETRAIN*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="oil-can" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Engine</p>
                    <p className="car-listing__spec--description">*ENGINE TYPE*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="clipboard-list" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Interior</p>
                    <p className="car-listing__spec--description">*INTERIOR*</p>
                  </div>
                </div>
                <div className="car-listing__spec">
                  <figure className="car-listing__spec--icon">
                    <FontAwesomeIcon icon="user-group" />
                  </figure>
                  <hr className="car-listing__spec--divider" />
                  <div className="car-listing__spec-description--container">
                    <p className="car-listing__spec-description--title">Seating</p>
                    <p className="car-listing__spec--description">*SEATING NUMBER*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarListing;
