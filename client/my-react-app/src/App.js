import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList.js'
import ProductDetails from './components/ProductDetails.js'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
//
// const products = [
//     {
//         id: 1,
//         name: 'Handbag',
//         price: 1450
//     },
//     {
//         id: 5,
//         name: 'Heater',
//         price: 550
//     }
// ]


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={ () => <Redirect to="/products" /> } />
        </div>
      </Router>
    )
  }
}


export default App;
