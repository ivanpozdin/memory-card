/* eslint-disable react/prop-types */

import "./GameOver.css";

export default function GameOver({ cardsNumber, currentScore, playAgain }) {
  return (
    <div className="game-over-container">
      {cardsNumber != currentScore ? (
        <>
          <h2>You lose:(</h2>
          <p>
            Guessed {currentScore}/{cardsNumber}
          </p>
          <div>
            <iframe
              src="https://giphy.com/embed/3ohs7ZJYcrUxwZ89Fu"
              width="480"
              height="270"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <button onClick={playAgain}>Play again?</button>
        </>
      ) : (
        <>
          <h2>You WON!!!</h2>
          <p>
            Guessed {currentScore}/{cardsNumber}
          </p>
          <div>
            <iframe
              src="https://giphy.com/embed/3ohs82x0MzvGUUaIcU"
              width="480"
              height="270"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <button onClick={playAgain}>Play again?</button>
        </>
      )}
    </div>
  );
}
