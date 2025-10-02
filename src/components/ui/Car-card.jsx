import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAllCars } from '../Cars-api.jsx'

import CarImg from '../../assets/image-not-available-template.png'

const CarCard = () => {

  return (
    <div className="car__card cursor-pointer">
            <div className="car__card--container">
              <figure className="car__img--container">
                <img
                  src={CarImg}
                  className="car__img--wrapper"
                  alt=""
                />
              </figure>
              <div className="car__info">
                <p className="car__name light-blue">*Car's Year and Make*</p>
                <div className="car-specs__container">
                  <div className="car__spec">
                    <figure className="spec__img">
                      <FontAwesomeIcon icon="gauge-high" />
                    </figure>
                    <p className="spec__info light-blue">*Car Milage* km</p>
                  </div>
                  <div className="car__spec">
                    <figure className="spec__img">
                      <FontAwesomeIcon icon="car-side" />
                    </figure>
                    <p className="spec__info light-blue">*Car Type*</p>
                  </div>
                  <div className="car__spec">
                    <figure className="spec__img">
                      <FontAwesomeIcon icon="gears" />
                    </figure>
                    <p className="spec__info light-blue">*Transmission*</p>
                  </div>
                </div>
                <p className="car__price light-blue">$*Price*</p>
              </div>
            </div>
          </div>
  )
}

export default CarCard;