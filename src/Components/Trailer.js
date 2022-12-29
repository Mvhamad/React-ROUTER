import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from './Data';

import '../styles/trailer.css';


export default function Trailer() {
  const { title } = useParams()

  return (
    <>
      <div className="all">
        <div className='Trailer'>
          {Data.filter(movies => movies.title === title).map((movie) => (
            <div key={movie.id} className='re'>
              <h2> Trailers of {movie.title} </h2>
              <div className="vid">
              <iframe src={movie.trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p> {movie.description} </p>
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}
