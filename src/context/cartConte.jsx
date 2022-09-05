import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children, movie }) {
  const [productsCart, setProductsCart] = useState([]);

  //{id: 1, qtd:1}

  function addProductToCart(id) {
    const movieCart = [...productsCart];

    const item = movieCart.find((movie) => movie.id === id);

    if (!item) {
      movieCart.push({ id: movie.id, qtd: 1, title:movie.title });
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(movieCart);
  }

  function removeProductToCart(id) {
    const movieCart = [...productsCart];

    const item = movieCart.find((movie) => movie.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(movieCart);
    } else {
      const arrayFiltered = movieCart.filter(
        (movie) => movie.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  }

  function clearCart() {
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}