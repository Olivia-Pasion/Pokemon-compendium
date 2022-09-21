import './PokeCard.css';

export default function PokeCard({ url_image, pokemon, type_1, type_2, hp }) {
  return (
    <div className="poke-card">
      <img src={url_image} />
      <h3>{pokemon}</h3>
      <div className="info">
        <span className="type1">{type_1}</span>
        <span className="type2">{type_2}</span>
        <span className="hp">{hp}</span>
      </div>
    </div>
  );
}