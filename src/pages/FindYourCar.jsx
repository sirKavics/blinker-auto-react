import React, { useState } from 'react'

import NavFYC from '../components/Nav-fyc.jsx'
import SearchFYC from "../components/Search-fyc.jsx"
import CarsFYC from '../components/Cars-fyc.jsx'

const FindYourCar = () => {
  const [searchType, setSearchType] = useState("brand");
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState({
    type: "",
    input: "",
    });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch({
      type: searchType,
      input: searchInput.trim(),
    }); //
  }; 

  const resetAllCars = () => {
    setSearchInput("");
    setSearchType("brand");
    setSubmittedSearch({ type: "", input: "" });
  }; // Reset search filters and show all cars

  return (
    <>
      <NavFYC onReset={resetAllCars} />
      <SearchFYC 
        searchType={searchType}
        searchInput={searchInput}
        setSearchType={setSearchType}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      <CarsFYC 
        searchType={submittedSearch.type}
        searchInput={submittedSearch.input}
      />
    </>
  );
};

export default FindYourCar;