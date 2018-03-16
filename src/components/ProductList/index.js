// Aquí se mostraran los productos
import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";
import Navbar from '../../components/NavBar';
import "./style.css"


class ProductList extends Component {
    constructor() {
        super();

        this.state = {
            products: []
            
        }
        
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                       <Thumbnail src="" alt="Item">
                            <h3>Nombre: </h3>
                            <p>Precio: </p>
                            <p>Condicion: </p>
                            <p>Disponibles: </p>
                            <p>Vendidos: </p>
                            <p>Ciudad: </p>
                            <p>Comuna: </p>
                            <p>
                                <Button bsStyle="default">Agregar</Button>
                            </p>
                        </Thumbnail>
                     </Col>
                </Row>
            </Grid>
        )
    }

}

export default ProductList;