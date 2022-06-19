import { ChangeEvent, FC } from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block/cart-block';
import { GameSearch } from '../game-search/game-search';
import './header.css';

type HeaderProps = {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const Header: FC<HeaderProps> = ({ onChange }) => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <Link to='/' className='header__store-title'>
          Game Store
        </Link>
      </div>
      <div>
        <GameSearch onChange={onChange} />
      </div>
      <div className='wrapper header__cart-btn-wrapper'>
        <CartBlock />
      </div>
    </div>
  );
};
