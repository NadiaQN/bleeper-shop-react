// Aquí se mostraran los productos
import React, { Component } from 'react';
import { Col, Thumbnail, Button } from "react-bootstrap";
import "./style.css"


class ProductList extends Component {
  render() {
    const {title, price, condition, available, sold, thumbnail } = this.props
  
    return (
          <Col xs={12} md={3}>
            <Thumbnail
              src={thumbnail} 
              alt={title} className='card-item'>
              <h3>{title}</h3>
              <p>Precio: {price}</p>
              <p>Condicion: {condition}</p>
              <p>Disponibles: {available}</p>
              <p>Vendidos: {sold}</p>
              {/* <p>Ciudad: {state}</p>
              <p>Comuna: {city}</p> */}
              <p>
                <Button bsStyle="default">Agregar</Button>
              </p>
            </Thumbnail>
          </Col>
    )
  }
}


export default ProductList;