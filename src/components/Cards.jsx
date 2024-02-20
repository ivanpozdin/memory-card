/* eslint-disable react/prop-types */
import characters from "/src/assets/dark/characters.js";
import shuffle from "../shuffleArray";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Cards({
  handleGameOver,
  setCurrentScore,
  cardsNumber = 6,
}) {
  const [currentCharacters, setCurrentCharacters] = useState(
    shuffle(Object.entries(characters)).slice(0, cardsNumber)
  );
  const [wasCharacterClicked, setWasCharacterClicked] = useState({});

  useEffect(() => {
    document.querySelectorAll(".card-container").forEach((element) => {
      element.classList.add("card-spin-after-shuffle");
      element.addEventListener(
        "animationend",
        () => {
          element.classList.remove("card-spin-after-shuffle");
        },
        { once: true }
      );
    });
    document.querySelectorAll(".card-container img").forEach((element) => {
      element.classList.add("card-img-after-shuffle");
      element.addEventListener(
        "animationend",
        () => {
          element.classList.remove("card-img-after-shuffle");
        },
        { once: true }
      );
    });
  }, [currentCharacters]);

  const handleCharacterClick = function (name) {
    if (wasCharacterClicked[name]) {
      handleGameOver();
      return;
    }
    document.activeElement.blur();

    document.querySelectorAll(".card-container").forEach((element) => {
      element.classList.add("card-spin-before-shuffle");
      element.addEventListener(
        "animationend",
        () => {
          element.classList.remove("card-spin-before-shuffle");
        },
        { once: true }
      );
    });

    document.querySelectorAll(".card-container img").forEach((element) => {
      element.classList.add("card-img-before-shuffle");
      element.addEventListener(
        "animationend",
        () => {
          element.classList.remove("card-img-before-shuffle");
        },
        { once: true }
      );
    });

    setTimeout(() => setCurrentCharacters(shuffle(currentCharacters)), 700);

    const updatedWasCharacterClicked = { ...wasCharacterClicked };
    updatedWasCharacterClicked[name] = true;

    setCurrentScore((score) => score + 1);

    setWasCharacterClicked(updatedWasCharacterClicked);
    if (Object.keys(updatedWasCharacterClicked).length == cardsNumber) {
      handleGameOver();
    }
  };

  const cards = currentCharacters.map((entry, id) => (
    <Card
      key={id}
      name={entry[0]}
      imgSrc={entry[1]}
      handleClick={handleCharacterClick}
    />
  ));

  const cardsContainer = <div className="cards-container">{cards}</div>;

  window.addEventListener;

  return cardsContainer;
}
/*
  let columns = 1;
  for (let i = cardsNumber; i > 1; i--) {
    if (cardsNumber % i !== 0) continue;

    if (i * 200 < 0.8 * window.innerWidth) {
      columns = i;
      break;
    }
  }

  const cardsStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns},  200px) `,
    gap: "2rem",
  };
*/
