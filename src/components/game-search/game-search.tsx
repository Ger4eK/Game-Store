import { ChangeEvent } from 'react';
import { FC } from 'react';
import './game-search.css';

type GameSearchProps = {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const GameSearch: FC<GameSearchProps> = ({ onChange }) => {
  return (
    <div>
      <div className='form'>
        <form className='search__form'>
          <input
            type='text'
            placeholder='Search game...'
            className='search__input'
            onChange={onChange}
          ></input>
        </form>
      </div>
    </div>
  );
};
