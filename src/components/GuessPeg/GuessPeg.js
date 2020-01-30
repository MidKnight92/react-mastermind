import React from 'react';
import styles from './GuessPeg.module.css'
const GuessPeg = props => (
	<button style={{backgroundColor: props.color, borderColor: props.color} }className={styles.button}
	/>
)

export default GuessPeg;