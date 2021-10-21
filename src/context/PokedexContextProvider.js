import React, { useState } from "react";
import PokedexContext from "./PokedexContext";

const PokedexContextProvider = ({ children }) => {
  const [pokeType, setPokeType] = useState('all');
  const [pokeName, setPokeName] = useState('');

  const contextValue = {
    pokeType, setPokeType, pokeName, setPokeName
  };

  return (
    <PokedexContext.Provider value={ contextValue }>
      { children }
    </PokedexContext.Provider>
  );
}

export default PokedexContextProvider;
