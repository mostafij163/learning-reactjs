import React, { Component } from 'react';
import './App.css';
// import ContactCard from "./ContactCard";
// import Qustion from './Qustion';
// import qustionData from './qustionData';
// import Product from './Product';
// import productData from './productData';
import Todo from './Todo';
import todoData from './todoData';
import { format } from 'path';
//import Conditional from './Conditional';

class App extends Component {

  //********** fetch data ****************/
  // constructor() {
  //   super();
  //   this.state = {
  //     loadStatus: false,
  //     person: {}
  //   }
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState(prevState => prevState.loadStatus = !prevState.loadStatus);
  //   });
  //   fetch("https://swapi.co/api/people/1")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       loadStatus: false,
  //       person: data
  //     })
  //   })
  // }

// *******************ToDo App**************

  // constructor() {
  //   super();
  //   this.state = {
  //     todos: todoData
  //   }

  //   this.taskCompleter = this.taskCompleter.bind(this);
  // }

  // taskCompleter(id) {
  //   this.setState(prevState => {
  //     const updatedTodo = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo
  //     });
  //     return {
  //       todos: updatedTodo
  //     }
  //   });
  // }
  // ******************************************
  
  //********* form **********/
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      age: null,
      destination: null,
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

  /*********Conditional rendering*******

  // constructor() {
  //   super();
  //   this.state = {
  //     isLoading: true
  //   }
  // }

  // componentDidMount() {
  //   setTimeout(()=> {
  //     this.setState({
  //       isLoading: false
  //     });
  //   }, 1500);
  // }
  ********************************/

  // constructor() {
  //   super();
  //   this.state = {
  //     isLoggedIn: false
  //   }
  //   this.handleLogStatus = this.handleLogStatus.bind(this);
  // }

  // handleLogStatus(){
  //   this.setState(prevState => {
  //     return {
  //       isLoggedIn: !prevState.isLoggedIn
  //     }
  //   })
  // }

  render() {
    //const qustionComponent = qustionData.map(data => <Qustion key={data.id} qustion={data.qustion} answer= {data.answer} />)

    //GRABING THE HOLE ITEM BY product INSTED OF INITIALIZING ONE BY ONE
    //img= {product.img} name= {product.name} company= {product.company} price= {product.price} description= {product.description}
    //const productComponent = productData.map(items => <Product key= {items.id} product= {items} />);

    // const todoComponent = this.state.todos.map(items => <Todo key= {items.id} item= {items} handleChange = {this.taskCompleter} />);
    
    // let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    // let bodyText = this.state.isLoggedIn ? "logged in" : "logged out"

   // const text = this.state.loadStatus ? "loading..." : this.state.person.name;

    return (
      <div className="App">
          <form onSubmit = {this.handleSubmit}>
          <label> First Name
            <input 
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </label>
            <label> Last Name
              <input 
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Age
              <input 
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </label>
            
            <label>Destination
              <input 
                type="checkbox"
                name="destination"
                checked={this.state.destination}
                onChange={this.handleChange}
              />
            </label>
            <label>Favorite Color
              <select 
                value={this.state.color}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </label>
            <label>Female
              <input 
                type="radio"
                value="female"
                name="gender"
                // checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <h1>Your Informations</h1>
          <h3> Name: {this.state.firstname} { this.state.lastname} </h3>
          <h3> Age: {this.state.age} </h3>
          <h3>Favorite Color: {this.state.color} </h3>
          <h3>Destination: {this.state.destination ? `Dhaka` : null} </h3> 
          <h3>Gender: {this.state.gender} </h3>
      {/*
        //<h3>{text}</h3>

         // todoComponent

        <button onClick = {this.handleLogStatus} >{buttonText}</button>
        <h1>{bodyText}</h1> */}
      </div>
    );
  }
}

export default App;
