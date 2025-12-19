import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "../components/Nav.jsx";
import CarListing from "../components/Car-listing.jsx";
import CarListingSkeleton from "../components/ui/Car-listing-skeleton.jsx";

const CarInfo = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  const car = state?.car;

  useEffect (() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      <Nav />
      {loading ? <CarListingSkeleton /> : <CarListing car={car} />}
    </>
  );
};

export default CarInfo;