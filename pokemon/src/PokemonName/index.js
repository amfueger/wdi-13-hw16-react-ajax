import React, { Component } from 'react';

class PokemonName extends Component{
	render(){
		const singleName = this.props.pokemons.map((pokemon, i) => {
			return(
				<li key={i}>
				Pokemon Name: {pokemon.results.name}<br/>
				Pokemon URL: {pokemon.results.url}<br/>
				<button id={i} onClick={this.props.seeSingleMon.bind(null,i)}>See this Pokemon</button>
				</li>
				)
		})
		return(
			<div>	
				<ul>
					{singleName}
				</ul>
			</div>
			)
	}
}

export default PokemonName;