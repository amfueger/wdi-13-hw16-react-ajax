import React, { Component } from 'react';

// import PokemonAbilities from '../PokemonAbilities';
// import PokemonTypes from '../PokemonTypes';
// import PokemonName from '../PokemonName';

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
  getPokemonInfo = (indexOfPokemon) => {
    this.setState({
      // name: this.state.pokemons.filter((pokemon, i) => i ==parseInt(indexOfPokemon)),
      // ability:null,
      // types: null
    });
  }
  render() {
    return (
    <div>
    <h1> Page</h1>
    </div>
    );
  }
}
//Create login functionality in which when you land on the app, you see a login component, and then it switches, to your main container component after you are logged in.
//Inside of your main component you will render at least three properties from your API.
     // <Grid container columns={3} textAlign='center' verticalAlign='top'>
      //  <Grid.Column style={{maxWidth: 450}}>
        //  <h4>{this.props.username}'s Pokemon</h4>  
       // </Grid.Column>
       // <Grid.Column style={{maxWidth: 450}}>
       //   <PokemonName name={this.state.name}/>
      //  </Grid.Column>
      //  <Grid.Column style={{maxWidth: 450}}>
      //    <PokemonAbilities ability={this.state.ability}/>
      //  </Grid.Column>
      //  <Grid.Column style={{maxWidth: 450}}>
      //    <PokemonTypes types={this.state.types}/>
     //   </Grid.Column>
    //  </Grid>
export default PokemonContainer;