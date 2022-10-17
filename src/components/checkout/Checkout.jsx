import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import './Checkout.css'


export default function Checkout() {
  const cart = useCart()
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const itemsCount = Object.keys(cart.cart).length
  const remove = id => () => {
    cart.removeFromCart(id)
   }
  const clearCart = ()=> {
    cart.clearCart()
  }
  

console.log(cart.cart)
  return (
    <container className="checkout-container">
      
        <div  className={sidebar ? "checkout-menu active" : "menu-checkout"} style={{zIndex:1}}>
          <header className="header-checkout">
          
            <h1 className="header-title-checkout">Meu Carrinho</h1>   
            <button onClick={clearCart} className="clear-cart">Esvaziar Carrinho</button>
          </header>
          
          
        {Object.keys(cart.cart).map((key) => {
        const movie = cart.cart[key]
        const imgUrl = "https://www.themoviedb.org/t/p/w92/"
        return (
          <main key={key}>
            <div className="item-cart">
             <div className="img-item-cart"><img style={ {backgroundImage: `url(${imgUrl}${movie.poster_path})`}} alt=""/></div> 
              <div className="title-movie-cart">{movie.title}</div>
              <div className="value-item-cart">
                <h5>1</h5>
                <h4>R$70,00</h4>
                <button onClick={remove(key)} className="delete-item-cart">
                  <span className="material-icons" >delete</span>
                </button>
              </div>
            </div>    
          </main> 
            )
          })}
          <footer className="footer">
              <div className="total-checkout">
                <h2>Total</h2>
                <h2>R$ {itemsCount * '70'},00</h2>  
              </div> 
              {/* <Link  to="/cart" className="btn-buy-checkout">
              Finalizar compra
              </Link> */}
          </footer>
          
        </div>  
      </container>  
    
  )
}