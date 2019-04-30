import React, { Component } from 'react';
import './App.css';
// import ContactCard from "./ContactCard";
// import Qustion from './Qustion';
// import qustionData from './qustionData';
// import Product from './Product';
// import productData from './productData';
 // import Todo from './Todo';
 // import todoData from './todoData';
// import { format } from 'path';
//import Conditional from './Conditional';
import FormContainer from './FormContainer';
import MemeGenerator from './MemeGenerator'

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
        <MemeGenerator />
        <FormContainer />

      {/*
        //<h3>{text}</h3>
        <button onClick = {this.handleLogStatus} >{buttonText}</button>
        <h1>{bodyText}</h1> */}
      </div>
    );
  }
}

export default App;
