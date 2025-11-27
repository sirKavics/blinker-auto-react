import React from "react";
import CarSpec from "./Car-spec.jsx";

const CarDetails = () => {
  return (
    <div className="car-listing__details--container">
      <div className="car-listing__details--card">
        <h1 className="car-listing__details--title">Vehicle Details</h1>
        <div className="car-listing__specs--container">
          <CarSpec icon="gauge-high" title="MPG" value="*MPG* city, *MPG* hwy" />
          <CarSpec icon="gas-pump" title="Fuel type" value="*FUEL TYPE*" />
          <CarSpec icon="spray-can-sparkles" title="Exterior color" value="*CAR COLOR*" />
          <CarSpec icon="gears" title="Transmission" value="*TRANSMISSION*" />
          <CarSpec icon="arrows-spin" title="Drivetrain" value="*DRIVETRAIN*" />
          <CarSpec icon="oil-can" title="Engine" value="*ENGINE TYPE*" />
          <CarSpec icon="clipboard-list" title="Interior" value="*INTERIOR*" />
          <CarSpec icon="user-group" title="Seating" value="*SEATING NUMBER*" />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
