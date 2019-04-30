import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
          firstname: '',
          lastname: '',
          age: '',
          destination: '',
          color: '',
          gender: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        const {name, type, checked, value} = event.target;
        type === 'checkbox' ?
        this.setState(
          {
            [name]: checked
          }
        ) 
        : 
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        alert("Form Submited");
        event.preventDefault();
      }
    render(){
        return(
            <FormComponent
                handleChange = { this.handleChange }
                handleSubmit = { this.handleSubmit }
                data = { this.state}
            />
        )
    }
}

export default FormContainer;

