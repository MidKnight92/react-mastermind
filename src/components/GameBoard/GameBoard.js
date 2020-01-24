import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = props => (
	<div>
		{props.guesses.map((guess, idx) => 
			<GuessRow 
			key={idx}
			rowIdx={idx}
			currentGuess={idx ===(props.guesses.length - 1)}
			guess={guess} 
			colors={props.colors}
			/>
		)}
	</div>
);

export default GameBoard