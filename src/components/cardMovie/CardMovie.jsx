import React, {useState} from "react";
import {  useCart } from "../../context/CartContext";
import "./CardMovie.css";

export default function CardMovie({ movie }) {
 const cart = useCart( )
 const [status, setStatus] = useState({
  type: '',
  mensagem:''
 });
 
 const add = movie => () => {
  cart.addToCart(movie)

  setStatus({ type: 'sucsess', mensagem:"Filme adicionado"})

}

 const imgUrl = "https://www.themoviedb.org/t/p/w200/"

  return (
    <container className="card-movie">
        <button  className="fav-btn">
          <span className="material-icons">favorite</span>
        </button>
        <header 
        className="poster-image"
        style={ {backgroundImage: `url(${imgUrl}${movie.poster_path})`}}
        ></header>

        <main className="card-details">
          <div className="name-movie">
            <h4>{movie.title}</h4> 
            <h6>{movie.genre}</h6>
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
        <button 
        onClick={add(movie)}
        className="btn-buy">
            Adicionar
            <span className="material-icons">shopping_cart</span>
            
        </button>
        {status.type === 'success' ? <p style={{color: 'green'}}>{status.mensagem}</p> : ""}
     </container>
  
  );
}