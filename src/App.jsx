import { useCallback, useEffect, useState } from "react";
import "./App.css";

import HomeButton from "./components/HomeButton";
import Cards from "./components/Cards";
import Start from "./components/Start";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

const START_SCREEN = 0;
const PLAY_SCREEN = 1;
const GAME_OVER_SCREEN = 2;

function App() {
  const [currentScreen, setCurrentScreen] = useState(START_SCREEN);
  const [cardsNumber, setCardsNumber] = useState(4);
  const [currentScore, setCurrentScore] = useState(0);

  const handleStartClick = function (cardsNumberNew = null) {
    if (cardsNumberNew) setCardsNumber(cardsNumberNew);
    setCurrentScore(0);
    setCurrentScreen(PLAY_SCREEN);
  };

  const handleGameOver = function () {
    setCurrentScreen(GAME_OVER_SCREEN);
  };

  const handlePlayAgain = function () {
    setCurrentScore(0);
    setCurrentScreen(PLAY_SCREEN);
  };

  const handleHomeClick = function () {
    setCurrentScreen(START_SCREEN);
  };

  const adjustCardLayout = function () {
    if (currentScreen !== PLAY_SCREEN) {
      return;
    }
    const cardsContainer = document.querySelector(".cards-container");

    let columns = 1;
    for (let i = cardsNumber; i > 1; i--) {
      if (cardsNumber % i !== 0) continue;

      if (i * 200 < 0.8 * window.innerWidth) {
        columns = i;
        break;
      }
    }

    cardsContainer.style.gridTemplateColumns = `repeat(${columns}, 200px)`;
  };

  const adjustCardLayoutCallback = useCallback(adjustCardLayout, []);

  useEffect(() => {
    adjustCardLayoutCallback();
  }, [currentScreen, adjustCardLayoutCallback]);

  window.addEventListener("resize", adjustCardLayout);

  return (
    <>
      <header>
        <HomeButton handleClick={handleHomeClick} />
        <Score currentScore={currentScore}></Score>
      </header>
      <main>
        {currentScreen == START_SCREEN ? (
          <Start handleStartClick={handleStartClick} />
        ) : (
          ""
        )}
        {currentScreen == PLAY_SCREEN ? (
          <Cards
            handleGameOver={handleGameOver}
            setCurrentScore={setCurrentScore}
            cardsNumber={cardsNumber}
          />
        ) : (
          ""
        )}
        {currentScreen == GAME_OVER_SCREEN ? (
          <GameOver
            cardsNumber={cardsNumber}
            currentScore={currentScore}
            playAgain={handlePlayAgain}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
