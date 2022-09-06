import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import MenuCart from "../menuCart/MenuCart";

import './Header.css'

export default function Header(props){
  
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function buscar(e){
    e.preventDefault()
    navigate("/search?query=" + search)
  }
  
  return(
    <container className="Header">
      <Link to="/"><div className="Logo">STORE</div></Link>
      <form onSubmit={buscar}>
        <input 
          type="text" 
          name="query"
          id="query" 
          onChange={e => setSearch(e.target.value)}
        />
       
        <button className="btn-search" type="submit">Buscar</button>
     
      </form>
      
      <div className="menu-header"> 
        <MenuCart/>       
      </div>
    </container>
  )
}

