import { GameType } from '../App';

export const calcTotalPrice = (items: GameType[]) =>
  items.reduce((acc, game) => (acc += game.price), 0);
