import React from 'react';
//import { Link } from "react-router-dom";
import "../styles/moviecard.css"
const MovieCard = (props) => {
  return (
    <>
      <div className="container">
        {/* <Link className='link' to={`/Movies/${props.title}`}> */}
          <div className="card">
            <h3>{props.title}</h3>
            <img src={props.poster} alt={props.title} />
            <p>{props.description}</p>
            <p> <b>Rating :</b> {props.rating}/10</p>
          </div>
        {/* </Link> */}
      </div>
    </>
  );
};


export default MovieCard;
