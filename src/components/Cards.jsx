/* eslint-disable react/prop-types */
import characters from "/src/assets/dark/characters.js";
import shuffle from "../shuffleArray";
import Card from "./Card";
import { useState } from "react";

export default function Cards({
  handleGameOver,
  setCurrentScore,
  cardsNumber = 6,
}) {
  const [currentCharacters, setCurrentCharacters] = useState(
    shuffle(Object.entries(characters)).slice(0, cardsNumber)
  );
  const [wasCharacterClicked, setWasCharacterClicked] = useState({});

  const handleCharacterClick = function (name) {
    if (wasCharacterClicked[name]) {
      handleGameOver();
      return;
    }

    const updatedWasCharacterClicked = { ...wasCharacterClicked };
    updatedWasCharacterClicked[name] = true;

    setCurrentScore((score) => score + 1);

    setWasCharacterClicked(updatedWasCharacterClicked);

    if (Object.keys(updatedWasCharacterClicked).length == cardsNumber) {
      handleGameOver();
    }

    setCurrentCharacters(shuffle(currentCharacters));
  };

  const cards = currentCharacters.map((entry) => (
    <Card
      key={entry[0]}
      name={entry[0]}
      imgSrc={entry[1]}
      handleClick={handleCharacterClick}
    />
  ));

  return <div className="cards-container">{cards}</div>;
}
