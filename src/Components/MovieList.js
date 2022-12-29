import React from 'react';
import MovieCard from './MovieCard';
import { Link } from "react-router-dom";

import "../styles/movielist.css"

function MovieList({ movies }) {

  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
           <Link className='link' to={`/${movie.title}`}>
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              description={movie.description}
              rating={movie.rating}
            />
           </Link>
        ))}

      </div>
    </>
  );
};



export default MovieList
