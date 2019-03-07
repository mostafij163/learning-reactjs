import React, {Component} from 'react';

function Todo(props){
	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	return(
			<div>
				<div style={{backgroundColor: "#f0f0f0", margin: "0px auto", width: "960px"}}>
					<input 
						type="checkbox" 
						checked = {props.item.completed}
						onChange = {()=> props.handleChange(props.item.id)}
					/>
					<label className = "task-label" style= {props.item.completed ? completedStyle : null}>{props.item.task}</label>	
				</div>
			</div>
		);
}

export default Todo;