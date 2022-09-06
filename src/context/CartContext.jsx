import { createContext, useContext, useEffect, useState } from "react";
export const CartContext = createContext()

export default function CartProvider ({children}) {
  const[cart, setCart] = useState({})
  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart')
    if(cartLocal){
      setCart(JSON.parse(cartLocal))
    }
  }, [])

  const addToCart = (movie) =>{
    console.log(movie)
    setCart((old) => {
      const newCart ={...old,
      [movie.id]:movie
      }
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return(newCart)
    })
  }
  

  const removeFromCart = (movieId) => {
    setCart(old => {
      const newCart = {}
      Object.keys(old).forEach(id => {
        if(id !== movieId){
          newCart[id] = old[id]
        }
      })
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }

  const clearCart = () =>{
    const newCart = {}
    setCart({})
    window.localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart
  }
 
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}