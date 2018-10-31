import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './PokemonContainer';
import Login from './Login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    this.setState({
      username: username,
      logged: isLoggedIn
    });
  }
  render() {
    return (
      <div id="App">
      {this.state.logged ? <PokemonContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin}/>}
      </div>
      )
  }
}



export default App;
