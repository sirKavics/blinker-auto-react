import React from 'react'

import NavFYC from '../components/find your car/Nav-fyc.jsx'
import SearchFYC from "../components/find your car/Searchbar-fyc.jsx"
import Cars from '../components/find your car/Cars-fyc.jsx'

const FindYourCar = () => {
  return (
    <>
      <NavFYC />
      <SearchFYC />
      <Cars />
    </>
  )
}

export default FindYourCar;