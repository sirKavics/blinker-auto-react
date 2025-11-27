import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarSpec = ({ icon, title, value }) => {
  return (
    <div className="car-listing__spec">
      <figure className="car-listing__spec--icon">
        <FontAwesomeIcon icon={icon} />
      </figure>
      <hr className="car-listing__spec--divider" />
      <div className="car-listing__spec-description--container">
        <p className="car-listing__spec-description--title">{title}</p>
        <p className="car-listing__spec--description">{value}</p>
      </div>
    </div>
  );
};

export default CarSpec;
