import { FC } from 'react';
import './items-in-cart.css';

type ItemsInCart = {
  quantity: number;
};

export const ItemsInCart: FC<ItemsInCart> = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className='items-in-cart'>{quantity}</div> : null;
};
