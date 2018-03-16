// Carro de compras
import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';
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
        <Col md={12}>
            <div className="item-table">
                    <Table>
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
            </div>
        </Col>
        )
    }
}
            

        

export default CartShop;