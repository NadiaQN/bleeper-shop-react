import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';
import Footer from './components/Footer';
import CartShop from './components/NavBar/CartShop';
import ProductList from './components/ProductList';
import IconsProducts from './components/IconsProducts';
import CenterItem from './components/CenterItem';
import { Thumbnail } from 'react-bootstrap';
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
        {this.state.data.length === 0
          ? <Carousel />
          : this._renderResults()}
        <CenterItem/>
        <IconsProducts/>
        <Footer/>
      </div>
    );
  }
}

export default App;
