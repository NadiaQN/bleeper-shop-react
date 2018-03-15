// Carro de compras
import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import './style.css'

class CartShop extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }

    render() {
        return (
            <Row className="show-grid">
                <Col xs={12} md={3} mdOffset={8}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name</td>
                            </tr>
                            <tr>
                                <td>precio</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}
            

        

export default CartShop;