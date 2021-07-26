import React from 'react';
import ButtonType from './ButtonType';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.updateParent = this.updateParent.bind(this);
  }

  updateParent(value) {
    this.props.updateGrandParent(value);
  }

  render() {
    const { id, name, types, weight } = this.props.pokemon;
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
              updateParent={this.updateParent}
              />)}
          </div>
        </div>
      </div>
    );
  }
}
