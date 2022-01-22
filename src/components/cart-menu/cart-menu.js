import React from "react";
import { Button } from "../button/button";
import { CartItem } from "../cart-item/cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Кошик порожній"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total price:</span>
            <span>{calcTotalPrice(items)} USD</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Place order
          </Button>
        </div>
      ) : null}
    </div>
  );
};
