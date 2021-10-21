import React, { useContext } from 'react';
import PokedexContext from '../context/PokedexContext';
import ButtonType from './ButtonType';

const Header = () => {
  const { setPokeName } = useContext(PokedexContext);

  const types = [
    'all', 'bug', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost',
    'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'
  ]

  const updatePokemonName = ({ target: { value }}) => {
    setPokeName(value.toLowerCase());
  }

  return (
    <header className="header">
      <h2>Sort by:</h2>
      <div className="sortby-name">
        <label>Name:</label>
        <input
          onChange={updatePokemonName}
          name="pokemon-name"
          id="pokemon-name"
          type="text"
        />
      </div>
      <div className="sortby-type">
        <label>Type:</label>
        {types.map((typeObj) => <ButtonType
            className="btn-type-header"
            key={typeObj}
            type={typeObj}
        />)}
      </div>
    </header>
  );
};

export default Header;
