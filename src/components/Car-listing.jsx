import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarDetails from "../components/ui/Car-details.jsx";
import CarPhoto from "../assets/image-not-available-template.png"

const CarListing = ({ car }) => {

  return (
    <>
      <section id="car-listing">
        <div className="car-listing__row">
          <div className="car-listing__directory--container">
            <p className="car-listing__directory">
              <Link to="/find-your-car" className="breadcrumb__link">
                All Cars  
              </Link>
              {" / "}
              <Link to={`/find-your-car?make=${encodeURIComponent(car.model_make_id)}`} className="breadcrumb__link">
                {car.model_make_id}  
              </Link>
              {" / "}
              <Link to={`/find-your-car?make=${encodeURIComponent(car.model_make_id)}&model=${encodeURIComponent(car.model_name)}`} className="breadcrumb__link">
                {car.model_name}  
              </Link>
            </p>
          </div>
          <div className="car-listing__container">
            <figure className="car-img__container">
              <img src={CarPhoto} className="car-listing__img" alt="car listing" />
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
                    {car.model_year} {car.model_make_id} {car.model_name}
                  </h1>
                  <p className="car-listing__miles light-blue">
                    {car.model_mileage} miles
                  </p>
                  <h1 className="car-listing__price light-blue">
                    ${car.model_price}
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
          <CarDetails car={car} />
        </div>
      </section>
    </>
  );
};

export default CarListing;
