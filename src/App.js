import React, { Component } from 'react';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker'
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton'
import './App.css';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD']

const arrEl = 4;


class App extends Component {
  constructor(){
    super();
    this.state = {
      selColorIdx: 0,
      guesses: [],
      code: this.genCode
    };
  }
  genCode = () => {
    return new Array(arrEl).fill().map(() => Math.floor(Math.random() * colors.length));
  }
  render() {
    return (
      <div className="App">
        Selected Color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard />
          <div>
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
          <footer>footer</footer>
      </div>
    );
  }
}

export default App;
