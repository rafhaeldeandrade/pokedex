import React, { useContext } from 'react';
import PokedexContext from '../context/PokedexContext';

const ButtonType = ({ type }) => {
  const { setPokeType }  = useContext(PokedexContext);

  const renderBtn = (pokeType) => {
    const types = {
      bug: {background: '#A8B820'},
      dragon: {background: '#7038F8'},
      electric: {background: '#F8D030'},
      fairy: {background: '#EE99AC'},
      fighting: {background: '#C03028'},
      fire: {background: '#F08030'},
      flying: {background: '#A890F0'},
      ghost: {background: '#705898'},
      grass: {background: '#78C850'},
      ground: {background: '#E0C068'},
      ice: {background: '#98D8D8'},
      normal: {background: '#A8A878'},
      poison: {background: '#A040A0'},
      psychic: {background: '#F85888'},
      rock: {background: '#B8A038'},
      steel: {background: '#B8B8D0'},
      water: {background: '#6890F0'},
    }

    return types[pokeType]
    ? {backgroundColor: types[pokeType].background}
    : {backgroundColor: '#fff', border: '1px solid #000'}
  }

  const handleClick = (e) => {
    setPokeType(e.target.innerHTML);
    Array.from(document.querySelectorAll('.btn-type-active'))
      .map((el) => el.classList.remove('btn-type-active'));
    e.target.classList.toggle('btn-type-active');
  };

  return (
    <button
      className="btn-type"
      onClick={ handleClick }
      style={ renderBtn(type) }
    >
      {type}
    </button>
  )
}

export default ButtonType;
