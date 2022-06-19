import { GameType } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { Button } from '../button/button';
import './game-buy.css';
import { FC, MouseEvent } from 'react';
import { RootState } from '../../redux/store';

type GameBuyProps = {
  game: GameType;
};

export const GameBuy: FC<GameBuyProps> = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.itemsInCart);
  //! Використовується для умови зміни кнопки
  const isItemInCart = items.some((item: GameType) => item.id === game.id);

  const handleClick = (event: MouseEvent) => {
    //! event при кліку буде вспливати вверх аж до самого body
    //! stopPropagation - зупиняє всплиття event, тобто ми не будем при кліку "В кошик" провалюватись в гру, а будем тільки додавати в корзину
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} USD</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClickButton={handleClick}
      >
        {isItemInCart ? 'Remove' : 'Add to card'}
      </Button>
    </div>
  );
};
