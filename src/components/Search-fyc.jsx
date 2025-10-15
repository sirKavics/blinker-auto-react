import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchFYC = ({ searchType, searchInput, setSearchType, setSearchInput }) => {

  const handleToggle = (type) => {
    setSearchType(type);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
  };

  return (
    <div className="search__container">
      <h1 className="search__title">Browse our cars</h1>
      <div className="search__input--container fyc-search__input--container">
        <form id="search__bar" onSubmit={handleSubmit}>
          <input
            className="search__input fyc-search__input"
            type="text"
            placeholder={`Search your car by ${searchType}`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="search__toggle--container">
            <div className="search__toggle--bar">
              <div 
                className="toggle__slider"
                style={{
                  transform:
                  searchType === "brand"
                  ? "translateX(0%)" : searchType === "model"
                  ? "translateX(100%)" : "translateX(240px)",
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
              type="submit"
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
