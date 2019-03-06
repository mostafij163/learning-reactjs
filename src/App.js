import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import Qustion from './Qustion';
import qustionData from './qustionData';
import Product from './Product';
import productData from './productData';
import Todo from './Todo';
import todoData from './todoData';

class App extends Component {
  render() {
    //const qustionComponent = qustionData.map(data => <Qustion key={data.id} qustion={data.qustion} answer= {data.answer} />)

    //GRABING THE HOLE ITEM BY product INSTED OF INITIALIZING ONE BY ONE
    //img= {product.img} name= {product.name} company= {product.company} price= {product.price} description= {product.description}
    //const productComponent = productData.map(items => <Product key= {items.id} product= {items} />);

    const todoComponent = todoData.map(items => <Todo key= {items.id} item= {items} />);
    return (
      <div className="App">
        {todoComponent}
      </div>
    );
  }
}

export default App;
