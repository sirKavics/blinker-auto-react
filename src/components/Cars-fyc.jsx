import React, { useEffect, useState } from "react";
import { getAllCars } from "./api/Cars-api.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarCard from "./ui/Car-card.jsx";
import CarCardSkeleton from "./ui/Car-card-skeleton.jsx";

const CarsFYC = ({ searchType, searchInput }) => {
  const [cars, setCars] = useState([]); // Original list from API
  const [loading, setLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState([]); // Cars after filtering
  const [priceRange, setPriceRange] = useState(""); // Price filter

  // 1️. Fetch cars from API when component mounts
  useEffect(() => {
    async function fetchCars() {
      const allCars = await getAllCars();
      setCars(allCars);
      setFilteredCars(allCars); // Initially show all cars

      setTimeout(() => setLoading(false), 600); // Data has been loaded, stopping loading state
    }
    fetchCars();
  }, []);

  // 2️. Filter cars whenever search input, search type, price range, or cars change
  useEffect(() => {
    let searchResults = cars; // Start with all cars

    // a) SEARCH FILTER
    if (searchInput) {
      const typeMap = {
        brand: "car", // brand maps to car property
        model: "car_model", // model maps to car_model property
        year: "car_model_year", // year maps to car_model_year property
      };

      searchResults = searchResults.filter((car) => {
        const value = car[typeMap[searchType]];
        return (
          value &&
          value.toString().toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    }

    // b) PRICE FILTER

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);

      searchResults = searchResults.filter((car) => {
        // Convert price string "$6,383" -> number 6383
        const price = Number(car.price.replace("$", "").replace(",", ""));

        return price >= min && price <= max;
      });
    }

    // c) Update state with filtered cars
    setFilteredCars(searchResults);
  }, [searchInput, searchType, priceRange, cars]);

  return (
    <section id="search">
      <div className="progress__buffer"></div>
      <div id="filter" className="filter__content--wrapper">
        <div id="search__info" className="search-info__container">
          {searchInput && (
            <h1 className="search-info">
              Search results for: <br />
              <span className="bright-blue">"{searchInput}"</span>
            </h1>
          )}
        </div>
        <div className="price-filter__container">
          <h2 className="price-title">
            <span className="blue">Filter by price:</span>
          </h2>
          <form className="price__options--container">
            <select
              name="price__options"
              id="price"
              className="price__options"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
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
        {!loading &&filteredCars.length === 0 && (
          <div className="car-search__no-results--container">
            {priceRange && !searchInput && (
              <>
                <figure className="car-search__no-results--icon">
                  <FontAwesomeIcon icon="triangle-exclamation" />
                </figure>
                <p className="car-search__no-results--title">
                  No cars found in this price range!
                </p>
                <p className="car-search__no-results--subtitle">
                  Try choosing a different price filter.
                </p>
              </>
            )}
            {searchInput && !priceRange && (
              <>
                <figure className="car-search__no-results--icon">
                  <FontAwesomeIcon icon="triangle-exclamation" />
                </figure>
                <p className="car-search__no-results--title"> No cars found!</p>
                <p className="car-search__no-results--subtitle">
                  Try a different make, model, or year
                </p>
              </>
            )}
            {searchInput && priceRange && (
              <>
                <figure className="car-search__no-results--icon">
                  <FontAwesomeIcon icon="triangle-exclamation" />
                </figure>
                <p className="car-search__no-results--title">
                  No cars match your search + price range!
                </p>
                <p className="car-search__no-results--subtitle">
                  Try adjusting your filters.
                </p>
              </>
            )}
          </div>
        )}
        <div className="car__list">
          {loading  ?
          ([...Array(12)].map((_, index) => <CarCardSkeleton key={index} />)
          ) : (
            filteredCars.map((car) => <CarCard key={car.id} car={car} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default CarsFYC;
