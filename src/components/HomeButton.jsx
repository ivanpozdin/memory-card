import "./HomeButton.css";
import triquetta from "/src/assets/dark/triquetra2.gif";

// eslint-disable-next-line react/prop-types
export default function HomeButton({ handleClick }) {
  return (
    <button
      className="home-btn"
      onClick={() => {
        document.activeElement.blur();
        handleClick();
      }}
    >
      <img src={triquetta} alt="triquetta" />
      <h1>DARK</h1>
    </button>
  );
}
