import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CarImg from "../../assets/image-not-available-template.png";

const CarCard = ({ car }) => {

  return (
    <div className="car__card cursor-pointer">
      <div className="car__card--container">
        <figure className="car__img--container">
          <img src={CarImg} className="car__img--wrapper" alt="" />
        </figure>
        <div className="car__info">
          <p className="car__name light-blue">{car.car_model_year} {car.car} <br /> {car.car_model}</p>
          <br></br>
          <div className="car-specs__container">
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="gauge-high" />
              </figure>
              <p className="spec__info light-blue">N/A km</p>
            </div>
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="car-side" />
              </figure>
              <p className="spec__info light-blue">{car.car_color}</p>
            </div>
            <div className="car__spec">
              <figure className="spec__img">
                <FontAwesomeIcon icon="gears" />
              </figure>
              <p className="spec__info light-blue">N/A</p>
            </div>
          </div>
          <p className="car__price light-blue">{car.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
