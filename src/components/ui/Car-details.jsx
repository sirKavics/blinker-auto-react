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
              value={`${car.model_lkm_city} city/${car.model_lkm_hwy} hwy`}
            />
            <CarSpec
              icon="gas-pump"
              title="Fuel type"
              value={car.model_engine_fuel}
            />
            <CarSpec
              icon="spray-can-sparkles"
              title="Trim"
              value={car.model_body}
            />
            <CarSpec
              icon="gears"
              title="Transmission"
              value={car.model_transmission_type}
            />
            <CarSpec
              icon="arrows-spin"
              title="Drivetrain"
              value={car.model_drive}
            />
            <CarSpec 
              icon="oil-can" 
              title="Engine"
              value={car.model_trim} />
            <CarSpec
              icon="car-side"
              title="Car body"
              value={car.model_body}
            />
            <CarSpec 
              icon="right-to-bracket" 
              title="Doors" 
              value={car.model_doors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
