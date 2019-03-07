import React, {Component} from 'react';

function Todo(props){
	return(
			<div>
				<div style={{backgroundColor: "#f0f0f0", margin: "0px auto", width: "960px"}}>
					<input 
						type="checkbox" 
						checked = {props.item.completed}
						onChange = {()=> props.handleChange(props.item.id)}
					/>
					<label style= {{display: "inline-block", padding: "10px", borderBottom: "2px solid #cccccc", width: "98%"}} >{props.item.task}</label>	
				</div>
			</div>
		);
}

export default Todo;