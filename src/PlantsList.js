import React from 'react';

export default function PlantsList({ plants }) {
  return plants.map((plant, i) => <div className="plant" key={`${plant}-${i}`}>
    <p>{plant.name}</p>
    <p>{plant.sun_exposure}</p>
    <p>Soil Type: {plant.soil_type}</p>
    <p>PH: {plant.soil_PH}</p>
    <img src={plant.image} />
  </div>);
}