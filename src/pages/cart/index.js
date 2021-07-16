import CartTable from "./cart-table";
import { CartContext } from "../../helpers/cartProvider";
import React, { useContext } from "react";

export default function Cart() {
  const { items, cartTotal, updateQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <>
      <CartTable
        items={items}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
