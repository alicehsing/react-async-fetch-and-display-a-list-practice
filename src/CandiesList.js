import React from 'react';

export default function CandiesList({ candies }) {
  return candies.map((candy, i) => <div className="candy" key={`${candy}-${i}`}>
    <p>{candy.name}</p>
    <p>{candy.texture}</p>
    <p>{candy.sugar_level}</p>
  </div>);
}
