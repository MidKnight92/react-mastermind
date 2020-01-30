import React from 'react';
import styles from './ColorPicker.module.css'

const ColorPicker = (props) => {
	return (
		<div>
			{props.colors.map((color, idx) => 
				<button 
				className={styles.button} 
				key={color}
				style={idx === props.selColorIdx ? {backgroundColor: 'white', borderColor: color} : {backgroundColor: color, borderColor: color} }/>
			)}
		</div>
	)
}

export default ColorPicker;