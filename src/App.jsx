import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Start from "./components/Start";
import Score from "./components/Score";
import GameOver from "./components/GameOver";

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

  return (
    <>
      <div>
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
        <Score currentScore={currentScore}></Score>
      </div>
    </>
  );
}

export default App;
