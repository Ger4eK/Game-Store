import { FC } from 'react';
import { GameType } from '../../App';
import { Button } from '../button/button';
import { CartItem } from '../cart-item/cart-item';
import { calcTotalPrice } from '../utils';
import './cart-menu.css';

type CartMenuProps = {
  items: GameType[];
  onClick: () => void;
};

export const CartMenu: FC<CartMenuProps> = ({ items, onClick }) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__games-list'>
        {items.length > 0
          ? items.map((game: GameType) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : 'Empty'}
      </div>
      {items.length > 0 ? (
        <div className='cart-menu__arrange'>
          <div className='cart-menu__total-price'>
            <span>Total price:</span>
            <span>{calcTotalPrice(items)} USD</span>
          </div>
          <Button type='primary' size='m' onClickButton={onClick}>
            Place order
          </Button>
        </div>
      ) : null}
    </div>
  );
};
