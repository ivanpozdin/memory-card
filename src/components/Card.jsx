// eslint-disable-next-line react/prop-types
export default function Card({ name, imgSrc, handleClick }) {
  return (
    <button className="card-container" onClick={() => handleClick(name)}>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}
