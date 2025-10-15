import React, { useState } from 'react'

import NavFYC from '../components/Nav-fyc.jsx'
import SearchFYC from "../components/Search-fyc.jsx"
import CarsFYC from '../components/Cars-fyc.jsx'

const FindYourCar = () => {
  const [searchType, setSearchType] = useState("brand");
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <NavFYC />
      <SearchFYC 
        searchType={searchType}
        searchInput={searchInput}
        setSearchType={setSearchType}
        setSearchInput={setSearchInput}
      />
      <CarsFYC 
        searchType={searchType}
        searchInput={searchInput}
      />
    </>
  )
}

export default FindYourCar;