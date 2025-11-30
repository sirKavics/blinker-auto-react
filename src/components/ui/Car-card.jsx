import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarImg from "../../assets/image-not-available-template.png";

const CarCard = ({ car }) => {

  return (
    <Link to={`/car/${car.id}`} className="car__card cursor-pointer">
      <div className="car__card--container">
        <figure className="car__img--container">
          <img src={car.image} className="car__img--wrapper" alt="" />
        </figure>
        <div className="car__info">
          <p className="car__name light-blue">{car.year} {car.make} <br /> {car.model}</p>
          <br></br>
          <div className="car-specs__container">
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="gauge-high" />
              </figure>
              <p className="spec__info light-blue">{car.mileage} miles</p>
            </div>
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="spray-can-sparkles" />
              </figure>
              <p className="spec__info light-blue">{car.exterior_color}</p>
            </div>
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="gears" />
              </figure>
              <p className="spec__info light-blue">{car.transmission}</p>
            </div>
          </div>
          <p className="car__price light-blue">{car.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
