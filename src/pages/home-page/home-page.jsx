import React from "react";
import { GameItem } from "../../components/game-item/game-item";
import "./home-page.css";

export const HomePage = ({ filteredGames }) => {
  return (
    <div className="home-page">
      {filteredGames.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
