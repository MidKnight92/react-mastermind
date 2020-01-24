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
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.genCode
    };
  }
  getNewGuess = () => {
    return {
      //TODO: Remove comment when done testing
      // code: [null, null, null, null], 
      code: [3, 2, 1, 0], //TODO: remove once done testing
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }
  genCode = () => {
    return new Array(arrEl).fill().map(() => Math.floor(Math.random() * colors.length));
  }
  render() {
    return (
      <div className="App">
      <button onClick={() => this.setState((state) => {
        return {
          selColorIdx: ++state.selColorIdx % 4
        };
      })}>Next Color</button>
        Selected Color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard guesses={this.state.guesses} colors={colors}/>
          <div>
            <ColorPicker selColorIdx={this.state.selColorIdx} colors={colors}/>
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
