import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarDetails = () => {
  return (
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
              <p className="car-listing__spec--description">
                *MPG* city, *MPG* hwy
              </p>
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
              <p className="car-listing__spec-description--title">
                Exterior color
              </p>
              <p className="car-listing__spec--description">*CAR COLOR*</p>
            </div>
          </div>
          <div className="car-listing__spec">
            <figure className="car-listing__spec--icon">
              <FontAwesomeIcon icon="gears" />
            </figure>
            <hr className="car-listing__spec--divider" />
            <div className="car-listing__spec-description--container">
              <p className="car-listing__spec-description--title">
                Transmission
              </p>
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
  );
};

export default CarDetails;
