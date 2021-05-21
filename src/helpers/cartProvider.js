import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  // add product to cart
  const addToCart = (item, quantity = 1) => {
    const index = cartItems.findIndex((itm) => itm.id === item.id);

    if (index === -1) {
      let product = { ...item, cartQuantity: quantity };
      setCartItems([...cartItems, product]);
    } else {
      const index = cartItems.findIndex((itm) => itm.id === item.id);
      const copyCart = [...cartItems];
      copyCart[index].cartQuantity += quantity;
      setCartItems(copyCart);
    }
  };

  //increment or decrement
  const updateQuantity = (item, delta) => {
    const copyCart = [...cartItems];
    const index = cartItems.findIndex((itm) => itm.id === item.id);
    copyCart[index].cartQuantity += delta;
    setCartItems(copyCart);
  };

  //total Cartitems
  const totalCartItems = cartItems.reduce((sum, e) => sum + e.cartQuantity, 0);
  console.log(totalCartItems);

  // remove from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((e) => e.id !== item.id));
  };
  const items = cartItems;
  console.log(items);

  //   subtotal
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        ...props,
        addToCart,
        updateQuantity,
        items,
        total,
        totalCartItems,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
