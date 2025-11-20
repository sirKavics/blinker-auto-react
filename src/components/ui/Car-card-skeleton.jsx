import React from 'react'

const CarCardSkeleton = () => {
  return (
    <div className="car__card">
      <div className="car__card--container skeleton__card--container">
        <figure className="car__img--container">
          <div className="car__img--wrapper skeleton skeleton__img"></div>
        </figure>
        <div className="car__info">
          <div className="car__name">
            <div className="skeleton skeleton__text"></div>
          </div>
          <br />
          <div className="car-specs__container">
            <div className="car__spec">
              <div className="spec__info light-blue">
                <div className="skeleton skeleton__text"></div>
              </div>
            </div>
            <div className="car__spec">
              <div className="spec__info light-blue">
                <div className="skeleton skeleton__text"></div>
              </div>
            </div>
            <div className="car__spec">
              <div className="spec__info light-blue">
                <div className="skeleton skeleton__text"></div>
              </div>
            </div>
          </div>
          <div className="car__price light-blue">
            <div className="skeleton skeleton__text"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCardSkeleton;