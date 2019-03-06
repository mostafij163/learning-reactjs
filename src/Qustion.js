import React, {Component} from 'react';

function Qustion (props){
	return(
		<div>
			<h2 style= {{display: props.qustion ? "block" : "none", color: props.answer ? "inherit" : "#888888"}}>Qustion: {props.qustion}</h2>
			<h3 style= {{color: props.qustion ? "red" : "#888888", display: props.answer ? "block" : "none"}}>Answer: {props.answer}</h3>
		</div>
		);
}

export default Qustion;