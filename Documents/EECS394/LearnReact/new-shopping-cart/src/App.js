import React, { Component } from 'react';
import './App.css';

//<img src={require(`./static/products${obj.sku}_1.jpg`)} />;
//<p className="shipping">{freeShipping}</p>

class Item extends Component {
  render () {
    let freeShipping;
    if (this.props.product.isFreeShipping) {
      freeShipping = <p className="shipping">Free Shipping</p>;
    }
    return(
      <div className="Item">
        <div className="imagePackage">
          {freeShipping}
          <img className="Image" src={require(`./static/products/${this.props.product.sku}_1.jpg`)} />
        </div>
        <p className="itemName">{this.props.product.title}</p>
        <p className="price">{this.props.product.price}</p>
        <button className="button">Add to cart</button>
      </div>
    );
  }
}

class Products extends Component {
  render () {
    console.log("We've Entered Products");
    let data = require("./static/data/products.json").products;
    console.log(data.length);
    let ItemArray = [];
    for(let i = 0; i < data.length; i++) {
      console.log(i);
      ItemArray.push( <Item product={data[i]}/>);
    }
    return (
      <div className="Products">
        {ItemArray}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Let's Shop!</h1>
        <div className="select">
          <p>Order by </p>
          <select>
            <option value="select">Select</option>
            <option value="LowestHighest">Lowest to highest</option>
            <option value="HighestLowest">Highest to lowest</option>
          </select>
        </div>
        <Products/>
      </div>
    );
  }
}

export default App;

// <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>