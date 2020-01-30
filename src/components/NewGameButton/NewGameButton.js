import React from 'react';

const NewGameButton = props => (
	<button 
		onClick={() => {
			props.handleNewGame()
		}}
		className="btn btn-default">
			NewGameButton
	</button>
)

export default NewGameButton;