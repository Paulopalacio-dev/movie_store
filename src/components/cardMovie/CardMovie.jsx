import React from "react";

import "./CardMovie.css";

export default function CardMovie({ movie }) {

  const imgUrl = "https://www.themoviedb.org/t/p/w200/"
  
  return (
    <div className="card-movie">
        <span className="material-icons fav-btn">favorite</span>
        <div 
        className="poster-image"
        style={ {backgroundImage: `url(${imgUrl}${movie.backdrop_path})`}}
        ></div>

        <div className="card-details">
          <div className="name-movie">
            <h4>{movie.title}</h4>
          </div>
          <div className="score">
            <span className="material-icons">star</span>
            {movie.vote_average}
           
          </div>
          <div className="price-movie"> 
            <h3>R$70,00</h3>
          </div>
           
        </div>
        <a href="#" className="btn-details">
            Comprar
            <span className="material-icons">shopping_cart</span>
        </a>
    </div>
  );
}