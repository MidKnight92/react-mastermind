import React from 'react';

const ColorPicker = (props) => {
	return (
		<div>
			{props.colors.map(color => 
				<button key={color}>{color}</button>
			)}
		</div>
	)
}

export default ColorPicker;