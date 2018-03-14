// Navbar con input para buscar y el logo y el icono del carro de compras
import React from 'react';
import { Row, Col, Navbar, FormGroup, FormControl, Button, Media } from 'react-bootstrap';
import logo from './../../img/Blue_Bag_ Shopping_Logo.jpg';
import './style.css';


const navbar = ({}) => {
    return (
            <Row>
                <Col xs={12}>
                    <Navbar className='nav-bar'>
                        <Navbar.Header>
                            <Media.Left align='top'>
                                <a href="index.html"><img height={80} src={logo} alt={''} /></a>
                            </Media.Left>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Form className='form-search'>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Ropa, Autos, etc..." />
                                </FormGroup>{' '}
                                <Button type="submit">Buscar</Button>
                            </Navbar.Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col> 
            </Row>
    )
}

export default navbar;