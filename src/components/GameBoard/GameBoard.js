import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = props => (
	<div className="component">
		GameBoard
		<GuessRow className="component" />
		<GuessRow className="component" />
	</div>
);

export default GameBoard