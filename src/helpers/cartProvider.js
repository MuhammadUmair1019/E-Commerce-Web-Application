import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem("Product Cart");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState(getLocalCartItems());
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );
    setCartTotal(total);

    localStorage.setItem("Product Cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  return (
    <CartContext.Provider
      value={{
        ...props,
        addToCart,
        updateQuantity,
        items,
        cartTotal,
        totalCartItems,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
