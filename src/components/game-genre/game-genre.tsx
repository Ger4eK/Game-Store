import { FC } from 'react';
import './game-genre.css';

type GameGenreProps = {
  genre: string;
};

export const GameGenre: FC<GameGenreProps> = ({ genre }) => {
  return <span className='game-genre'> {genre}</span>;
};
