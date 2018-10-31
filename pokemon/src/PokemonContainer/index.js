import React, { Component } from 'react';

// import PokemonAbilities from '../PokemonAbilities';
// import PokemonTypes from '../PokemonTypes';
import PokemonName from '../PokemonName';

class PokemonContainer extends Component{
  constructor(){
    super();
    this.state = {
      pokemons: []
    }
  }
  getPokemons = async () => {
      try {
      const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon')
      const pokemonsJson = await pokemons.json();
      return pokemonsJson
      } catch(e){
        return e
      } 
  }
  componentDidMount(){
    this.getPokemons().then((pokemons) => {
      this.setState({
        pokemons: pokemons
      });
      console.log(pokemons, ' my pokemons let me show you them');
    }).catch((err) => {
      console.log(err, 'err');
    })
  }
  seeSingleMon = (iOfPokemon) => {
    this.setState({
      pokemons: this.state.pokemons.results.filter((pokemon, i) => i == parseInt(iOfPokemon)),
    });
  }
  render() {
    return (
    <div>
    <h1> Page</h1>
    <PokemonName seeSingleMon={this.seeSingleMon}/>
    </div>
    );
  }
}
//Create login functionality in which when you land on the app, you see a login component, and then it switches, to your main container component after you are logged in.
//Inside of your main component you will render at least three properties from your API.

export default PokemonContainer;