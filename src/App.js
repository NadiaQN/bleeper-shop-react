import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';
import Footer from './components/Footer';
import CartShop from './components/NavBar/CartShop';
import ProductList from './components/ProductList';
import IconsProducts from './components/IconsProducts';
import CenterItem from './components/CenterItem';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CartShop/>
        <ProductList/>
        <Carousel/>
        <CenterItem/>
        <IconsProducts/>
        <Footer/>
      </div>
    );
  }
}

export default App;
