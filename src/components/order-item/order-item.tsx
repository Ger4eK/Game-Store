import { useDispatch } from 'react-redux';
import { GameCover } from '../game-cover/game-cover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './order-item.css';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { FC } from 'react';
import { GameType } from '../../App';

type OrderItemProps = {
  game: GameType;
};

export const OrderItem: FC<OrderItemProps> = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className='order-item'>
      <div className='order-item__cover'>
        <GameCover image={game.image} />
      </div>
      <div className='order-item__title'>
        <span>{game.title}</span>
      </div>
      <div className='order-item__price'>
        <span>{game.price} USD</span>
        <AiOutlineCloseCircle
          size={25}
          className='cart-item__delete-icon'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
