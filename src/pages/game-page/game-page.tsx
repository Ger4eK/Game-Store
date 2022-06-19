import { FC } from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/game-buy/game-buy';
import { GameCover } from '../../components/game-cover/game-cover';
import { GameGenre } from '../../components/game-genre/game-genre';
import { RootState } from '../../redux/store';
import './game-page.css';

export const GamePage: FC = () => {
  const game = useSelector((state: RootState) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className='game-page'>
      <h1 className=' game-page__title'>{game.title}</h1>
      <div className='game-page__content'>
        <div className='game-page__left'>
          <iframe
            width='90%'
            height='400px'
            src={game.video}
            title='Youtube Video Player'
            frameBorder='null'
          ></iframe>
        </div>
        <div className='game-page__right'>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className='secondary-text'>
            Popular user-defined tags for this product:
          </p>
          {game.genres.map((genre: string) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className='game-page__buy-game'>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
