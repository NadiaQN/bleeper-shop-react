// Aquí se mostraran los productos
import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import Navbar from '../../components/NavBar';
import "./style.css"


class ProductList extends Component {
    constructor() {
        super();

        this.state = {
            products: this.props.data
            
        }
        
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                    {this.state.products.map(product =>
                            <Thumbnail src={product.thumbnail} alt="Item">
                            <h3>Nombre: {product.title}</h3>
                            <p>Precio: {product.price}</p>
                            <p>Condicion: {product.condition}</p>
                            <p>Disponibles: {product.available_quantity}</p>
                            <p>Vendidos: {product.sold_quantity}</p>
                            <p>Ciudad: {product.address.state_name}</p>
                            <p>Comuna: {product.address.city_name}</p>
                            <p>
                                <Button bsStyle="default">Agregar</Button>
                            </p>
                        </Thumbnail>
                        )}
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default ProductList;