import React from 'react';
import Header from './Header';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css';

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.pokeMap = this.pokeMap.bind(this);
    this.setTypeState = this.setTypeState.bind(this);
    this.setNameState = this.setNameState.bind(this);
    this.state = {
      type: 'all',
      name: '',
    }
  }

  setTypeState(childData) {
    this.setState({ type: childData });
  }

  setNameState(childData) {
    this.setState({ name: childData });
  }

  pokeMap() {
    const { type, name } = this.state;
    if (type === 'all') {
      if (name !== '') {
        return pokemons
        .filter((el) => el.name.includes(name))
        .map((el) => <Pokemon updateGrandParent={this.setTypeState} pokemon={el} key={el.name} />)
      }
      return pokemons.map((el) => <Pokemon updateGrandParent={this.setTypeState} pokemon={el} key={el.name} />);
    }
    return pokemons.filter((pokeObj) => {
      const some = pokeObj.types.some((pokeType) => pokeType.type.name === type);
      const hasName = pokeObj.name.includes(name);
      if (some && hasName) return pokeObj;
      return undefined;
    }).map((el) => <Pokemon updateGrandParent={this.setTypeState} pokemon={el} key={el.name} />);
  }

  render() {
    return (
      <div>
        <Header updateName={this.setNameState} updateGrandParent={this.setTypeState}/>
        <div className="pokedex">
          {this.pokeMap()}
        </div>
      </div>
    );
  }
}