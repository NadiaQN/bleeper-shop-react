import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';
import Footer from './components/Footer';
import CartShop from './components/NavBar/CartShop';
import ProductList from './components/ProductList';
import './App.css';



class App extends Component {
  state = { data: [] }

  _handleResults = (data) => {
    this.setState({ data })
  }

  _renderResults () {
    const { data } = this.state
    return data.map(product => {
      return (
        <ProductList key={product.id}>{product.title}</ProductList>
      )
    })
  }
  
  render() {
    return (
      <div className="App">
        <Navbar onResults={this._handleResults} />
        <CartShop/>
        <ProductList/>
        <Carousel/>
        <Footer/>
        {this.state.data.length === 0
      ? <p>Sin resultados</p>
      : this._renderResults()}
      </div>
      
    );
  }
}

export default App;
