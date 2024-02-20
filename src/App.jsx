import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Start from "./components/Start";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import Help from "./components/Help";
import Github from "./assets/github-mark-white.png";

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

  const helpWindow = Help();

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

  useEffect(() => {
    adjustCardLayout();
  }, [currentScreen]);

  window.addEventListener("resize", adjustCardLayout);

  return (
    <>
      <header>
        <button
          className="home-btn"
          onClick={() => {
            document.activeElement.blur();
            handleHomeClick();
          }}
        >
          <img src="/src/assets/dark/triquetra2.gif" alt="triquetta" />
          <h1>DARK</h1>
        </button>
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
      <footer>
        {/* {help ? helpWindow : ""} */}
        {helpWindow}
        <button
          className="help-btn"
          onClick={() => {
            document.activeElement.blur();
            document.querySelector(".help-window").classList.toggle("visible");
          }}
        >
          ?
        </button>
        <a
          className="github-link"
          href="https://github.com/ivanpozdin/memory-card/tree/work"
        >
          <img src={Github} alt="GitHub logo" />
        </a>
      </footer>
    </>
  );
}

export default App;
