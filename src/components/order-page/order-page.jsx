import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../order-item/order-item";
import { calcTotalPrice } from "../utils";
import "./order-page.css";

export const OrderPage = () => {
  //! цим ми добавили собі елементи з корзини
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Your cart is empty</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} products worth {calcTotalPrice(items)} USD
          </span>
        </div>
      </div>
    </div>
  );
};
