import React from "react";
import CarCard from "../ui/Car-card";

const CarsFYC = () => {
  return (
    <section id="search">
      <div className="progress__buffer"></div>
      <div id="filter" className="filter__content--wrapper">
        <div id="search__info" className="search-info__container">
          <h1 className="search-info">
            Search results for: <br />
            <span className="bright-blue">"make, model or keyword"</span>
          </h1>
        </div>
        <div className="price-filter__container">
          <h2 className="price-title">
            <span className="blue">Filter by price:</span>
          </h2>
          <form className="price__options--container">
            <select name="price__options" id="price" className="price__options">
              <option value="">Select your option...</option>
              <option value="0-1000">Under $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="3000-4000">$3,000 - $4,000</option>
              <option value="4000-5000">$4,000 - $5,000</option>
              <option value="5000-999999">Above $5000</option>
            </select>
          </form>
        </div>
      </div>
      <div id="cars" className="car__list--container">
        <div className="car__list">
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </section>
  );
};

export default CarsFYC;
