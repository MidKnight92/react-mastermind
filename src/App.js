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
      guesses: [this.getNewGuess()],
      code: this.genCode
    };
  }
  getNewGuess = () => {
    return {
      //TODO: Remove comment when done testing
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }
  genCode = () => {
    return new Array(arrEl).fill().map(() => Math.floor(Math.random() * colors.length));
  }
  getWinTries = () => {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess +1 : 0;
  }
  handleColorSelection = (colorIdx) => {
    this.setState({
      selColorIdx: colorIdx
    });
  }
  handleNewGame = () => {
    this.setState({
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode
    });
  }
  handlePegClick = (pegIdx) => {
    // Get index of last guess object
    let currentGuessIdx = this.state.guesses.length - 1;

    // Always replace object/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = {...guessesCopy[currentGuessIdx]}
    let codeCopy = [...guessCopy.code];

    // Update the NEW code array with the currently selected color
    codeCopy[pegIdx] = this.state.selColorIdx;

    // Update the NEW guess object
    guessCopy.code = codeCopy;

    // Update the NEW guesses array
    guessesCopy[currentGuessIdx] = guessCopy;

    // Update state with the NEW guesses array
    this.setState({
      guesses: guessesCopy
    });
  }
  handleScoreClick = () => {
    // Need the index of the current guess object (last object in guesses array)
    let currentGuessIdx = this.state.guesses.length - 1;

    // Create "working" copies of the "guessed" code and the secret code so that we can modify them as we compute the number of perfect and almost without messing up the actual ones in state
    let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0, almost = 0;

    // First Pass computes number of "perfect"
    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        // Ensure same choice is not matched again by updating both elements in the "working" arrays to null
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    // Second pass computes number of "almost"
    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        // Again, ensure same choice is not matched again
        secretCodeCopy[foundIdx] = null;
      }
    });

    // State must only be updated with NEW objects/arrays
      // Always replace object/arrays with NEW ones
      let guessesCopy = [...this.state.guesses];
      let guessCopy = {...guessesCopy[currentGuessIdx]};
      let scoreCopy = {...guessesCopy.score};

      // Set scores
      scoreCopy.perfect = perfect;
      scoreCopy.almost = almost;

      // Update the NEW guess with the NEW score object
      guessesCopy.score = scoreCopy;

      // Update the NEW guesses with the NEW guess object
      guessesCopy[currentGuessIdx] = guessesCopy;

      // Add a new guess if not a winner
      if (perfect!== 4) guessesCopy.push(this.getNewGuess());

      // Finally, update the state with the NEW guesses array
      this.setState({
        guesses: guessesCopy
      });
  }
  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  }
  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className="App-header-footer">R E A C T  &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <div className="flex-h align-flex-end">
          <GameBoard 
            handleScoreClick={this.handleScoreClick}
            handlePegClick={this.handlePegClick} 
            guesses={this.state.guesses} 
            colors={colors}/>
          <div className='App-controls'>
            <ColorPicker 
              selColorIdx={this.state.selColorIdx}
              colors={colors} 
              handleColorSelection={this.handleColorSelection}/>
            <GameTimer />
            <NewGameButton 
              handleNewGame={this.handleNewGame}/>
          </div>
        </div>
          <footer className='App-header-footer'>{winTries ? `You Won in ${winTries} Guesses!` : `Good Luck!`}</footer>
      </div>
    );
  }
}


export default App;
