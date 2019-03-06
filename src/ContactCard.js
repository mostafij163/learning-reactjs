import React, {Component} from 'react';

function ContactCard(props) {
	return(
		<div className="contact-card">
			<img src={props.contact.imgUrl} />
			<h4> {props.contact.name} </h4>
			<p> {props.contact.phone} </p>
			<p> {props.contact.email} </p>
		</div>
	);
}

export default ContactCard;