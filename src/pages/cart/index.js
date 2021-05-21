import CartTable from "./cart-table";
import { CartContext } from "../../helpers/cartProvider";
import React, { useContext } from "react";

export default function Cart() {
  const { items, total, updateQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <>
      <CartTable
        items={items}
        total={total}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
