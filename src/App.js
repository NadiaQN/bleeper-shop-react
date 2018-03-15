import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';
import Footer from './components/Footer';
import CartShop from './components/NavBar/CartShop';
import ProductList from './components/ProductList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CartShop/>
        <ProductList/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
