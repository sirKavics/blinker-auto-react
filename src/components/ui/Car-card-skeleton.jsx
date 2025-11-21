import React from 'react'

const CarCardSkeleton = () => {
  return (
    <div className="car__card">
      <div className="car__card--container ">
        <figure className="car__img--container">
          <div className="car__img--wrapper skeleton skeleton__img"></div>
        </figure>
        <div className="car__info car__info--skeleton">
          <div className="car__name">
            <div className="skeleton skeleton__text car__name--skeleton"></div>
          </div>
          <br />
          <div className="car-specs__container">
            <div className="car__spec">
              <div className="spec__info spec__skeleton">
                <div className="skeleton skeleton__text spec__info--skeleton"></div>
              </div>
            </div>
            <div className="car__spec">
              <div className="spec__info spec__skeleton">
                <div className="skeleton skeleton__text spec__info--skeleton"></div>
              </div>
            </div>
            <div className="car__spec">
              <div className="spec__info spec__skeleton">
                <div className="skeleton skeleton__text spec__info--skeleton"></div>
              </div>
            </div>
          </div>
          <div className="car__price light-blue">
            <div className="skeleton skeleton__text car__price--skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCardSkeleton;