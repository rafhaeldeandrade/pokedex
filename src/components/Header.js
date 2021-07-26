import React, { Component } from 'react';
import ButtonType from './ButtonType';

class Header extends Component {
  constructor(props) {
    super(props);
    this.updateParent = this.updateParent.bind(this);
    this.updatePokemonName = this.updatePokemonName.bind(this);
  }

  updateParent(value) {
    this.props.updateGrandParent(value);
  }

  updatePokemonName(e) {
    this.props.updateName(e.target.value.toLowerCase());
  }
  render() {
    const types = [
      'all', 'bug', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost',
      'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'
    ]

    return (
      <header className="header">
        
        <h1>Sort by:</h1>
        <div className="sortby-name">
          <label>Name:</label>
          <input onChange={this.updatePokemonName} name="pokemon-name" id="pokemon-name" type="text"></input>
        </div>
        <div className="sortby-type">
          <label>Type:</label>
          {types.map((typeObj) => <ButtonType
              className="btn-type-header"
              key={typeObj}
              type={typeObj}
              updateParent={this.updateParent}
          />)}
        </div>
      </header>
    );
  }
}

export default Header;