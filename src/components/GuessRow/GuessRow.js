import React from 'react';
import GuessScore from '../GuessScore/GuessScore'
import GuessPegs from '../GuessPegs/GuessPegs'

const GuessRow = props => (
	<div className="component flex-h">
		Guess Row #
		<GuessPegs />
		<GuessScore />
	</div>
)

export default GuessRow;
	
