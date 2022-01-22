import React, { useState } from "react";
import "./cart-block.css";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu/cart-menu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../items-in-cart/items-in-cart";

export const CartBlock = () => {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BsCart3
        size={25}
        className="cart-block__icon"
        onClick={() => setCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} USD</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
