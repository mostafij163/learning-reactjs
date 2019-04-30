import React from 'react';

function FormComponent(props) {
    return(
        <main>
            <form onSubmit = {props.handleSubmit}>
            <label> First Name
                <input 
                type="text"
                name="firstname"
                value={props.data.firstname}
                onChange={props.handleChange}
                />
            </label>
                <label> Last Name
                <input 
                    type="text"
                    name="lastname"
                    value={props.data.lastname}
                    onChange={props.handleChange}
                />
                </label>
                <label>
                Age
                <input 
                    type="number"
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                />
                </label>
                
                <label>Destination
                <input 
                    type="checkbox"
                    name="destination"
                    checked={props.data.destination}
                    onChange={props.handleChange}
                />
                </label>
                <label>Favorite Color
                <select 
                    value={props.data.color}
                    onChange={props.handleChange}
                    name="color"
                >
                    <option style={{ backgroundColor: 'blue', padding: '30px' }} value="blue">blue</option>
                    <option style={{ backgroundColor: 'red', padding: '30px' }} value="red">red</option>
                    <option style={{ backgroundColor: 'yellow', padding: '30px' }} value="yellow">yellow</option>
                </select>
                </label>
                <label>Male
                <input 
                    type="radio"
                    value="male"
                    // checked={this.state.gender === 'male'}
                    name="gender"
                    onChange={props.handleChange}
                />
                </label>
                <label>Female
                <input 
                    type="radio"
                    value="female"
                    name="gender"
                    // checked={this.state.gender === "female"}
                    onChange={props.handleChange}
                />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <h1>Your Informations</h1>
            <h3> Name: {props.data.firstname} { props.data.lastname} </h3>
            <h3> Age: {props.data.age} </h3>
            <h3>Favorite Color: {props.data.color} </h3>
            <h3>Destination: {props.data.destination ? `Dhaka` : null} </h3> 
            <h3>Gender: {props.data.gender} </h3>
        </main>
    )
}

export default FormComponent;
