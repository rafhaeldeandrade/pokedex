import React from 'react';
import ButtonType from './ButtonType';

const Pokemon = ({ pokemon }) => {
  const { id, name, types, weight } = pokemon;
  const source = `images/${id}.gif`;

  return (
    <div className="pokemon">
         <div className="pokemon-image">
           <img src={source} alt={name + ' image'} />
         </div>
         <div className="stats">
           <span className="stat num-pokemon">Nº{id}</span>
           <h2 className='pokemon-name stat'>{name}</h2>
           <span className="stat">{parseFloat(weight/10)}kg</span>
           <div className="types">
             {types.map(
               (typeObj) => <ButtonType
               key={name + ' ' + typeObj.type.name}
               type={typeObj.type.name}
               />)}
           </div>
         </div>
       </div>
  );
}

export default Pokemon;
