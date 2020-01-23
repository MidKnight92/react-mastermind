import React, { Component } from 'react';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'
import './App.css';

class App extends Component {
  render(){
     return (
      <div className="App">
        <header className="App-header">React MasterMind</header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <footer className="component">footer</footer>
      </div>
    );
  }
}

export default App;
