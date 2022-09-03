import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuCart from "../menuCart/MenuCart";
import MenuFavorite from "../menuFavorite/MenuFavorite";



import './Header.css'

export default function Header(props){

  const [search, setSearch] = useState("");


 
  function buscar(){
    props.history.push("/search?query=" + search)
  }

  return(
    <container className="Header">
       
      <div className="Logo">== STORE MOVIE ==</div>
      <nav className="menu-bar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Lançamentos</Link>
      </nav>
      <form onSubmit={buscar}>
        <input 
          type="text" 
          name="query"
          id="query" 
          onChange={e => setSearch(e.target.value)}
        />
       
        <button type="submit">
          <Link to="/search">Buscar</Link>
        </button>
      </form>
      
      <div className="menu-header"> 
      <MenuFavorite/>
      <MenuCart/>       
      </div>
    </container>
  )
}

