// src/CartContext.jsx

import { createContext, useState } from 'react';

// Context with its default values 
export const CartContext = createContext({
  cartItems: [],            // [{ id, name, price, quantity }]
  addToCart: () => {},      // (product)  -> if it is already in the cart, quantity + 1
  removeFromCart: () => {}, // (id)       -> removes the row (product)
  updateQuantity: () => {}, // (id, qty)  -> it changes the quantity of the row and if qty <= 0, removes the row
  clearCart: () => {},      // ()         -> empties the cart
});

// Component that keeps the cart state and shares it with the whole app.
// In main.jsx it wraps the router:
// <CartProvider><RouterProvider router={router} /></CartProvider>
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      // Already in the cart: new array where only that item has quantity + 1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Not in the cart: new array with the product added and quantity 1
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setCartItems(cartItems.concat(newItem));
    }
  };

  const removeFromCart = (id) => {
    // New array without that item
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      // Quantity 0 or less: the row disappears
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      // New array where only that item has the new quantity
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item))
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
