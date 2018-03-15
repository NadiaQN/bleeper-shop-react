import React, { Component } from 'react';
import Navbar from './components/NavBar';
import Carousel from './components/Carrousel/';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Carousel />
      </div>
    );
  }
}

export default App;
