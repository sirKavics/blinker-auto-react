import React from "react";
import CarSpec from "./Car-spec.jsx";

const CarDetails = ({ car }) => {
  return (
    <div className="car-listing__details--container">
      <div className="car-listing__details--card">
        <h1 className="car-listing__details--title">Vehicle Details</h1>
        <div className="car-listing__specs--container">
          <div className="car-listing__specs--wrapper">
            <CarSpec
              icon="gauge-high"
              title="MPG"
              value={`${car.mpg_city} city, ${car.mpg_highway} hwy`}
            />
            <CarSpec icon="gas-pump" title="Fuel type" value={car.fuel_type} />
            <CarSpec
              icon="spray-can-sparkles"
              title="Exterior color"
              value={car.exterior_color}
            />
            <CarSpec
              icon="gears"
              title="Transmission"
              value={car.transmission}
            />
            <CarSpec
              icon="arrows-spin"
              title="Drivetrain"
              value={car.drivetrain}
            />
            <CarSpec icon="oil-can" title="Engine" value={car.engine} />
            <CarSpec
              icon="clipboard-list"
              title="Interior"
              value={car.interior}
            />
            <CarSpec icon="user-group" title="Seating" value={car.seating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
