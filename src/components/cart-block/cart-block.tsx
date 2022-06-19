import { useCallback, useState } from 'react';
import './cart-block.css';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/cart-menu';
import { calcTotalPrice } from '../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { RootState } from '../../redux/store';

export const CartBlock: FC = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state: RootState) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    //! коли ми переходим на сторінку замовлення ми має закрити нашу корзину
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <BsCart3
        size={25}
        className='cart-block__icon'
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className='cart-block__total-price'>{totalPrice} USD</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
