/* eslint-disable react/prop-types */

const EASY = 4;
const MEDIUM = 6;
const HARD = 12;

export default function Start({ handleStartClick }) {
  return (
    <div className="start-container">
      <button onClick={() => handleStartClick(EASY)}>EASY</button>
      <button onClick={() => handleStartClick(MEDIUM)}>MEDIUM</button>
      <button onClick={() => handleStartClick(HARD)}>HARD</button>
    </div>
  );
}
