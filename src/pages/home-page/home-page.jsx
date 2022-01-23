import React from "react";
import { GameItem } from "../../components/game-item/game-item";
import "./home-page.css";

const GAMES = [
  {
    image: "/game-covers/forza_5.jpg",
    title: "Forza Horizon 5",
    genres: ["Racing", "Simulator", "Open world"],
    price: 42,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars. Begin Your Horizon Adventure today and add to your Wishlist!",
  },
  {
    image: "/game-covers/battlefield_2042.jpg",
    title: "Battlefield™ 2042",
    genres: ["Action", "Shooter", "War"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 52,
    id: 2,
    description:
      "Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.",
  },
  {
    image: "/game-covers/life_is_strange_true_colors.jpg",
    title: "Life is Strange True Colors",
    genres: ["Story Rich", "Mystery"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 50,
    id: 3,
    description:
      "Alex Chen hides her 'curse': the psychic power of Empathy, the ability to absorb the emotions of others. When her brother dies in a so-called accident, Alex must embrace her power to find the truth.",
  },
  {
    image: "/game-covers/gta_v.jpg",
    title: "Grand Theft Auto V",
    genres: ["Open world", "Action"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 30,
    id: 4,
    description:
      "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
  },
  {
    image: "/game-covers/rainbow_siege.jpg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Tactical", "Shooter"],
    price: 12,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Siege is the latest installment of the acclaimed first-person shooter franchise developed by the renowned Ubisoft Montreal studio.",
  },
  {
    image: "/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Parkour", "RPG", "Open world"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 32,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — is a multiplatform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin's Creed series.",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
