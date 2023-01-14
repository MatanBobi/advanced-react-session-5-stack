import React, { PureComponent } from "react";
import PokemonItem from "./Pokemon";
import { Pokemon } from "./types";

class PokemonsList extends PureComponent<
  { searchValue: string },
  { pokemons: Pokemon[] }
> {
  state = {
    pokemons: [] as Pokemon[],
  };

  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemons: data.results });
      });
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    const { searchValue } = this.props;
    const { pokemons } = this.state;

    const sortedPokemons = pokemons.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    return (
      <div className="pokemons-list">
        {sortedPokemons.map((pokemon) => (
          <PokemonItem
            name={pokemon.name}
            searchValue={searchValue}
            key={pokemon.name}
          />
        ))}
      </div>
    );
  }
}

export default PokemonsList;
