import React from 'react';
import GuessScore from '../GuessScore/GuessScore'
import GuessPegs from '../GuessPegs/GuessPegs'
import ScoreButton from '../ScoreButton/ScoreButton'
import styles from './GuessRow.module.css'

const GuessRow = props => (
	<div className={styles.GuessRow}>
		<div className={styles.rowNum} style={{color: props.currentGuess ? 'black' : 'lightgrey'}}> {props.rowIdx + 1}</div> 
		<GuessPegs currentGuess={props.currentGuess}colors={props.colors} code={props.guess.code}/>
		{
			props.currentGuess ?
			<ScoreButton /> : <GuessScore score={props.guess.score}/>
		}
	</div>
)

export default GuessRow;
	
