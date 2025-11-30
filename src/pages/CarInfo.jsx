import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllCars } from "../components/api/Cars-api.jsx"

import Nav from "../components/Nav.jsx";
import CarListing from "../components/Car-listing.jsx";
import CarListingSkeleton from "../components/ui/Car-listing-skeleton.jsx";

const CarInfo = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCar() {
      const Allcars = await getAllCars();
      const selectedCar = Allcars.find((car) => car.id.toString() === id);
      setCar(selectedCar);
      setTimeout(() => setLoading(false), 1000);
    }
    fetchCar();
  }, [id]);

  return (
    <>
      <Nav />
      {loading ? <CarListingSkeleton /> : <CarListing car={car} />}
    </>
  );
};

export default CarInfo;