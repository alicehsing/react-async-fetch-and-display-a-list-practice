import React from 'react';

export default function CarsList({ cars }) {
  return cars.map((car, i) => <div className="car" key={`${car}-${i}`}>
    <p>{car.year}</p>
    <p>{car.make} {car.model}</p>
    <p>{car.type}</p>
    <img src={car.image} />
  </div>);
}
