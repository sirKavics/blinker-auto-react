import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarDetails from "../components/ui/Car-details.jsx";

const CarListing = ({ car }) => {
  const navigate = useNavigate();

  const goToAllCars = () => navigate("/find-your-car");
  const goToMake = () => navigate(`/find-your-car?make=${car.make}`);
  const goToModel = () => navigate(`/find-your-car?model=${car.model}`);

  return (
    <>
      <section id="car-listing">
        <div className="car-listing__row">
          <div className="car-listing__directory--container">
            <p className="car-listing__directory">
              <span onClick={goToAllCars} style={{ cursor: "pointer" }}>
                All Cars  
              </span>
              {" / "}
              <span onClick={goToMake} style={{ cursor: "pointer" }}>
                {car.make}  
              </span>
              {" / "}
              <span onClick={goToModel} style={{ cursor: "pointer" }}>
                {car.model}  
              </span>
            </p>
          </div>
          <div className="car-listing__container">
            <figure className="car-img__container">
              <img src={car.image} className="car-listing__img" alt="car listing" />
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
                    {car.year} {car.make} {car.model}
                  </h1>
                  <p className="car-listing__year light-blue">
                    {car.mileage} miles
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
          <CarDetails car={car} />
        </div>
      </section>
    </>
  );
};

export default CarListing;
