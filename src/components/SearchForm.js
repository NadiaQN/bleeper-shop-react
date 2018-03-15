import React, { Component } from 'react';



export class SearchForm extends Component {
  state = {
    inputSearch: ''
  }

  _handleChange = (e) => {
    this.setState({ inputSearch: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputSearch } = this.state
    fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${inputSearch}`)
      .then(res => res.json())
      .then(results => {
        console.log(results)
      })
  }
    
  render () {
    return(
      <form onSubmit={this._handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input 
            className="input"
            onChange={this._handleChange} 
            type="text" 
            placeholder="Buscar" />
        </div>  
        <div className="control">
          <button className="button is-info">
          Search
          </button>
        </div>
      </div>
      </form>    
    ) 
  }
}