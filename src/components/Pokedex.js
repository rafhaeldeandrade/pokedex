import React, { useContext } from 'react';
import PokedexContext from '../context/PokedexContext';
import Header from './Header';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css';

const Pokedex = () => {
  const { pokeType, pokeName } = useContext(PokedexContext);

  const pokeMap = () => {
    if (pokeType === 'all') {
      if (pokeName !== '') {
        return pokemons
        .filter((el) => el.name.includes(pokeName))
        .map((el) => <Pokemon pokemon={el} key={el.name} />)
      }
      return pokemons.map((el) => <Pokemon pokemon={el} key={el.name} />);
    }
    return pokemons.filter((pokeObj) => {
      const some = pokeObj.types.some((pType) => pType.type.name === pokeType);
      const hasName = pokeObj.name.includes(pokeName);
      if (some && hasName) return pokeObj;
      return undefined;
    }).map((el) => <Pokemon pokemon={el} key={el.name} />);
  }

  return (
    <div>
      <Header />
      <div className="pokedex">
        {pokeMap()}
      </div>
    </div>
  );
}

export default Pokedex;
