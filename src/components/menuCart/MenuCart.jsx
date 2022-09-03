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
            <h2>Meu Carrinho</h2> 
            <button className="clear-cart">Esvaziar</button>
          </header>
          <main >
            <div className="item-cart">
              <div  ></div>
              <h3>Nome do filme</h3>
              <h5>1</h5>
              <h5>R$70,00</h5>
              <button  className="delete-item">
                <span class="material-icons">delete</span>
              </button>
            </div>
            <div className="item-cart">
              <img src=""/>
              <h3>Nome do filme</h3>
              <h5>1</h5>
              <h5>R$70,00</h5>
              <button  className="delete-item">
                <span class="material-icons">delete</span>
              </button>
            </div>
           
            <footer className="footer">
              <div className="total-cart">
                <h2>Total</h2>
                <h2>R$140,00</h2>  
              </div> 
              <Link onClick={showSidebar} to="/cart" className="btn-buy">
              Finalizar compra
              </Link>
            </footer>
          </main>
          
        </div>  
         

    </container>  
    
  )
}