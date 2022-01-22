import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button/button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  //! Використовується для умови зміни кнопки 
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    //! event при кліку буде вспливати вверх аж до самого body
    //! stopPropagation - зупиняє всплиття event, тобто ми не будем при кліку "В кошик" провалюватись в гру, а будем тільки додавати в корзину
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} USD</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Remove from cart" : "Add"}
      </Button>
    </div>
  );
};
