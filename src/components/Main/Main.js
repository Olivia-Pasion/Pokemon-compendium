import usePokemon from '../../hooks/usePokemon.js';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <div className='main'>
      <div>{pokemon}</div>
    </div>
  );
}
