import React from "react";

const Search = () => {
  return (
    <div className="search__container">
      <h1 className="search__title">Browse our cars</h1>
      <div className="search__input--container fyc-search__input--container">
        <form id="search__bar" onsubmit="renderCars()">
          <input
            className="search__input fyc-search__input"
            type="text"
            placeholder="Search your car here"
          />
          <div className="search__toggle--container">
            <div className="search__toggle--bar">
              <div className="toggle__slider"></div>
              <button
                className="toggle__option toggle__active"
                onClick="selectOption(0)"
              >
                Brand
              </button>
              <button className="toggle__option" onclick="selectOption(1)">
                Model
              </button>
              <button className="toggle__option" onclick="selectOption(2)">
                Year
              </button>
            </div>
          </div>
          <div className="fyc-btn__search--container">
            <button
              className="btn__search fyc-btn__search"
              onClick="renderCars()"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
