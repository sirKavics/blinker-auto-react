import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavFYC from "../components/Nav-fyc.jsx";
import SearchFYC from "../components/Search-fyc.jsx";
import CarsFYC from "../components/Cars-fyc.jsx";

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

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.has("make")) {
      setSearchType("brand");
      setSearchInput(params.get("make"));
      setSubmittedSearch({ type: "brand", input: params.get("make") });
    }

    if (params.has("model")) {
      setSearchType("model");
      setSearchInput(params.get("model"));
      setSubmittedSearch({ type: "model", input: params.get("model") });
    }

    if (!params.has("make") && !params.has("model")) {
      setSearchType("brand");
      setSearchInput("");
      setSubmittedSearch({ type: "", input: "" });
    }
  }, [location.search]);

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