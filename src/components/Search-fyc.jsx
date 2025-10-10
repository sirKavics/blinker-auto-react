import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchFYC = () => {
  const [searchType, setSearchType] = useState("brand");

  const handleToggle = (type) => {
    setSearchType(type);
  };

  return (
    <div className="search__container">
      <h1 className="search__title">Browse our cars</h1>
      <div className="search__input--container fyc-search__input--container">
        <form id="search__bar" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search__input fyc-search__input"
            type="text"
            placeholder={`Search your car by ${searchType}`}
          />
          <div className="search__toggle--container">
            <div className="search__toggle--bar">
              <div 
                className="toggle__slider"
                style={{
                  transform:
                  searchType === "brand"
                  ? "translateX(0%)" : searchType === "model"
                  ? "translateX(100%)" : "translate(240px)",
                }}  
              ></div>
              <button
                type="button"
                className={`toggle__option ${
                  searchType === "brand" ? "toggle__active" : ""
                }`}
                onClick={() => handleToggle("brand")}
              >
                Brand
              </button>
              <button
                type="button"
                className={`toggle__option ${
                  searchType === "model" ? "toggle__active" : ""
                }`}
                onClick={() => handleToggle("model")}
              >
                Model
              </button>
              <button
                type="button"
                className={`toggle__option ${
                  searchType === "year" ? "toggle__active" : ""
                }`}
                onClick={() => handleToggle("year")}
              >
                Year
              </button>
            </div>
          </div>
          <div className="fyc-btn__search--container">
            <button
              className="btn__search fyc-btn__search"
              onClick={() => console.log(`Searching by ${searchType}`)}
            >
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFYC;
