import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';
import Footer from './components/Footer';
import CartShop from './components/NavBar/CartShop';
import ProductList from './components/ProductList';
import './App.css';
import { Thumbnail } from 'react-bootstrap';



class App extends Component {
  state = { data: [] }

  _handleResults = (data) => {
    this.setState({ data })
  }

  _renderResults () {
    const { data } = this.state
    return data.map(product => {
      return (
        <ProductList 
          key={product.id}
          thumbnail={product.thumbnail}
          title={product.title} 
          price={product.price}
          condition={product.condition}
          available={product.available_quantity}
          sold={product.sold_quantity}
          // city={product.adress.state_name}
          // state={product.adress.city_name}
        />
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
