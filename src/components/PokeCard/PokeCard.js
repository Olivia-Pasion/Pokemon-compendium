import './PokeCard.css';

export default function PokeCard({ url_image, pokemon, type_1, type_2, hp, color_1 }) {
  let type2;
  if (type_2 !== 'NA')
    type2 = <span className="type2">{type_2[0].toUpperCase() + type_2.substring(1)}</span>;
  return (
    <div className="poke-card">
      <div className="poke-img bounce-5">
        <img src={url_image} />
      </div>
      <div className="info" style={{ backgroundColor: `${color_1}`, opacity: 0.9 }}>
        <h3>{pokemon[0].toUpperCase() + pokemon.substring(1)}</h3>
        <span className="type1">{type_1[0].toUpperCase() + type_1.substring(1)}</span>
        {type2}
        <br></br>
        <span className="hp">Starting HP {hp}</span>
      </div>
    </div>
  );
}
