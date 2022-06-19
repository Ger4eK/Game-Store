import { FC } from 'react';
import './game-cover.css';

type GameCoverProps = {
  image: string;
};

export const GameCover: FC<GameCoverProps> = ({ image }) => {
  return (
    <div className='game-cover' style={{ backgroundImage: `url(${image})` }} />
  );
};
