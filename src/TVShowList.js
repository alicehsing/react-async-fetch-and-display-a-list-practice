import React from 'react';

export default function TVShowList({ shows }) {
  return shows.map((show, i) => <div className="show" key={`${show}-${i}`}>
    <p>{show.name}</p>
    <p>{show.type}</p>
    <p>Number of Seasons: {show.number_of_season}</p>
    <p>Total Watched Hours: {show.watched_hours} hours</p>
    <p>Official Launch Date: {show.launch_date}</p>
  </div>);
}
