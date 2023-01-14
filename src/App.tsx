import React from "react";
import "./App.css";
import Description from "./Description";
import Header from "./Header";
import { sendAnalyticsPing } from "./helpers/utils";
import PokemonsList from "./PokemonsList";
import SearchBox from "./SearchBox";

export class App extends React.Component {
  state = {
    inputValue: "",
  };

  onInputChange = (inputValue: string) => {
    this.setState({ inputValue });
    sendAnalyticsPing(inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="App">
        <Header>Pokédex</Header>
        <SearchBox inputValue={inputValue} onChange={this.onInputChange} />
        <PokemonsList searchValue={inputValue} />
        <Description />
      </div>
    );
  }
}
