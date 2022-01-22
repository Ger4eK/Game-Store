import React from "react";
import "./cart-block.css";
import { BsCart3 } from "react-icons/bs";
export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BsCart3 size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">228 грн.</span>
    </div>
  );
};
