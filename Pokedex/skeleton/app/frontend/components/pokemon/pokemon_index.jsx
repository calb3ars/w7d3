import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map( (poke, index) => {
          return(
            <li  className="pokemon-index-item" key={index}>
              {poke.name}
              <img src={`${poke.image_url}`} />
            </li>
          );})
        }
      </ul>
    );
  }
}

export default PokemonIndex;
