"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {

  const [cart,setCart] = useState([]);

  function addToCart(product){
    setCart([...cart, product]);
  }

  function removeFromCart(index){
    const newCart = [...cart];
    newCart.splice(index,1);
    setCart(newCart);
  }

  function total(){
    return cart.reduce(
      (sum,item)=>sum + item.price,
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
