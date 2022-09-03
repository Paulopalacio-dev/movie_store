import React from "react";
import { Link } from "react-router-dom";

import "./CardMovie.css";

export default function CardMovie({ movie }) {

  const imgUrl = "https://www.themoviedb.org/t/p/w200/"
  
  return (
    <container className="card-movie">
        <span className="material-icons fav-btn">favorite</span>
        <header 
        className="poster-image"
        style={ {backgroundImage: `url(${imgUrl}${movie.poster_path})`}}
        ></header>

        <main className="card-details">
          <div className="name-movie">
            <h4>{movie.title}</h4> 
          </div>
          <div className="details">
            <div className="score">
              <span className="material-icons">star</span>
              {movie.vote_average}
            </div>
            <div className="price-movie"> 
              <h3>R$70,00</h3>
            </div>
          </div>
        </main>
        <button to="/search" className="btn-buy">
            Adicionar
            <span className="material-icons">shopping_cart</span>
        </button>
    </container>
  );
}