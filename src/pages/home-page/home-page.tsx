import { FC } from 'react';
import { GameType } from '../../App';
import { GameItem } from '../../components/game-item/game-item';
import './home-page.css';

type HomePageProps = {
  filteredGames: GameType[];
};

export const HomePage: FC<HomePageProps> = ({ filteredGames }) => {
  return (
    <div className='home-page'>
      {filteredGames.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
