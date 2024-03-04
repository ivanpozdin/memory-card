import "./Footer.css";
import Help from "./Help";
import Github from "../assets/github-mark-white.png";

export default function Footer() {
  return (
    <footer>
      {/* {help ? helpWindow : ""} */}
      {Help()}
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
  );
}
