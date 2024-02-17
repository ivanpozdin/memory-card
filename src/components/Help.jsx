export default function Help() {
  document.addEventListener("click", function (e) {
    if (!e.target.closest("button")) {
      document.querySelector(".help-window").classList.remove("visible");
    }
  });
  return (
    <div className="help-window">
      <button
        className="close-btn"
        onClick={() => {
          document.querySelector(".help-window").classList.toggle("visible");
        }}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <h3>This is a memory card game.</h3>
      <p>There is 1 rule: don't click on any card twice per game.</p>
      <p>To start playing click on game difficulty: EASY, MEDIUM or HARD.</p>
      <p>To go back to the main screen click the D A R K logo.</p>
    </div>
  );
}
