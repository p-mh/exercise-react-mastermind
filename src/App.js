import React, { Component } from 'react';
import './App.css';

import { BEGIN, PLAY } from './utils/constantes';

import Begin from './components/Begin';
import GameBoard from './components/GameBoard';

class App extends Component {
  state = {
    gameState: BEGIN,
  };

  play = () => {
    this.setState({
      gameState: PLAY,
    });
  };

  render() {
    const gameState = {
      BEGIN: <Begin play={this.play} />,
      PLAY: <GameBoard />,
    };

    return (
      <div className="App">
        <h1>MasterMind</h1>
        <div>{gameState[this.state.gameState]}</div>
      </div>
    );
  }
}

export default App;
