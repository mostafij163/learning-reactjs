import React, {Component} from 'react';

function Conditional(props) {
	return(
		<div>
			{props.isLoading ? <h1>Loading...</h1> : <h1>some cool stuf of react, this is Conditional rendaring</h1>}
		</div>
		)
}

export default Conditional;