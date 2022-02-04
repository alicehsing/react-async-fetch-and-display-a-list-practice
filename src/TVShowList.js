import React from 'react';

export default function TVShowList({ shows }) {
  return (
    <div className='show-box'>
      {
        shows.map(({
          name,
          type,
          watched_hours,
          launch_date,
          number_of_season,
          lead_actors
        }, i) => <div className='show-item' key={name + i}>
          <p>{name}</p>
          <p>{type}</p>
          <p>Number of seasons: {number_of_season}</p>
          <p>Official Launch Date: {launch_date}</p>
          <p>Cast:
            {
              lead_actors.map((actor, i) => <li className='cast' key={actor + i}>{actor}</li>)
            }
          </p>
        </div>
      
        )}
    </div> 
  );}

