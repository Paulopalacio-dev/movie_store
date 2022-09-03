import React, {useState} from "react";
import { Link } from "react-router-dom";

import './MenuCart.css'

export default function MenuCart() {
  const [sidebar, setSidebar] = useState( false);
  const showSidebar =() => setSidebar(!sidebar);

  console.log(sidebar)
  return (
    <container className="menu-container">
        <button onClick={showSidebar} className="menu-bars">
          <span className="material-icons">shopping_cart</span>
        </button>

        <div  className={sidebar ? "nav-menu active" : "nav-menu"} style={{zIndex:1}}>
          <header className="header-cart">
            <h1>Meu Carrinho</h1> 
            <button style={{color:'red'}}>Esvaziar</button>
          </header>
          <main>
            <div>
              <img src=""/>
              <h1>Nome do filme</h1>
              <h3>1</h3>
              <h1>R$70,00</h1>
              <span>icon</span>
            </div>
            <div>
              <img src=""/>
              <h1>Nome do filme</h1>
              <h3>1</h3>
              <h1>R$70,00</h1>
              <span>icon</span>
            </div>
            <div>
              <img src=""/>
              <h1>Nome do filme</h1>
              <h3>1</h3>
              <h1>R$70,00</h1>
              <button>icon</button>
            </div>
          </main>
        </div>   

    </container>  
    
  )
}