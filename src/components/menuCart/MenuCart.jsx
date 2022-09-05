import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import './MenuCart.css'


export default function MenuCart() {
  const cart = useCart()
  const [sidebar, setSidebar] = useState( false);
  const showSidebar =() => setSidebar(!sidebar);
  const itemsCount = Object.keys(cart.cart).length
  const remove = id => () => {
    cart.removeFromCart(id)
   }
  const clearCart = ()=> {
    cart.clearCart()
  }
 

console.log(cart.cart)
  return (
    <container className="menu-container">
      
        <button onClick={showSidebar} className="menu-bars">
          {itemsCount > 0 && <span>({itemsCount})</span>}
          <span className="material-icons">shopping_cart</span>
        </button>

        <div  className={sidebar ? "nav-menu active" : "nav-menu"} style={{zIndex:1}}>
          <header className="header-cart">
          
            <h2>Meu Carrinho</h2> 
            <button onClick={clearCart} className="clear-cart">Esvaziar</button>
          </header>
          <pre>{JSON.stringify(cart, null, 2)}</pre>
          {Object.keys(cart.cart).map((key) => {
            const {movie} = cart.cart[key]
            return (
              <main >
            <div className="item-cart">
              <h3>{}</h3>
              <h5>1</h5>
              <h5>R$70,00</h5>
              <button onClick={remove(key)} className="delete-item">
                <span class="material-icons" >delete</span>
              </button>
            </div>
           
           
           
          </main> 
            )
          })}
          <footer className="footer">
              <div className="total-cart">
                <h2>Total</h2>
                <h2>{itemsCount * '70,00'}</h2>  
              </div> 
              <Link onClick={showSidebar} to="/cart" className="btn-buy-cart">
              Finalizar compra
              </Link>
            </footer>
          
        </div>  
      </container>  
    
  )
}