import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product, quantity = 1) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
    };
  
    const removeFromCart = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
  
    const updateQuantity = (id, quantity) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        )
      );
    };
  
    const totalPrice = cart
      .reduce(
        (acc, item) =>
          acc + item.quantity * parseFloat(item.variants.edges[0].node.priceV2.amount),
        0
      )
      .toFixed(2);
  
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    return (
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          updateQuantity,
          totalItems,
          totalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    return useContext(CartContext);
  };