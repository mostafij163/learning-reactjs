import React, {Component} from 'react';

function Product (props){
	return (
			<div style= {{width: "960px", margin: "0px auto"}}>
				<img style={{margin: "50px auto", height: "210px", width: "180px"}} src={props.product.img} alt={props.product.name}/>
				<h2 style= {{fontSize: "20px"}}>Product Name: {props.product.name}</h2>
				<p style= {{fontWeight: "bold"}}>Brand: {props.product.company}</p>
				<p>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
				<p>Description: {props.product.description}</p>
			</div>
		);
}

export default Product;