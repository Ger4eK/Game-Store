import  { FC } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './cart-item.css';

type CartItemProps = {
  title: string;
  price: number;
  id: number;
};

export const CartItem: FC<CartItemProps> = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className='cart-item__price'>
        <span>{price} USD</span>
        <AiOutlineCloseCircle
          size={25}
          className='cart-item__delete-icon'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
