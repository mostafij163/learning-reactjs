import React, { Component } from 'react';
// import ContactCard from "./ContactCard";
// import Qustion from './Qustion';
// import qustionData from './qustionData';
// import Product from './Product';
// import productData from './productData';
import Todo from './Todo';
import todoData from './todoData';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todoData
    }

    this.taskCompleter = this.taskCompleter.bind(this);
  }

  taskCompleter(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      });
      return {
        todos: updatedTodo
      }
    });
  }

  render() {
    //const qustionComponent = qustionData.map(data => <Qustion key={data.id} qustion={data.qustion} answer= {data.answer} />)

    //GRABING THE HOLE ITEM BY product INSTED OF INITIALIZING ONE BY ONE
    //img= {product.img} name= {product.name} company= {product.company} price= {product.price} description= {product.description}
    //const productComponent = productData.map(items => <Product key= {items.id} product= {items} />);

    const todoComponent = this.state.todos.map(items => <Todo key= {items.id} item= {items} handleChange = {this.taskCompleter} />);

    return (
      <div className="App">
        {todoComponent}
      </div>
    );
  }
}

export default App;
