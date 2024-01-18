import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Score({ currentScore }) {
  const [maxScore, setMaxScore] = useState(currentScore);

  useEffect(() => {
    setMaxScore(Math.max(maxScore, currentScore));
  }, [currentScore, maxScore]);

  return (
    <div className="score-container">
      <p>Max score: {maxScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  );
}
