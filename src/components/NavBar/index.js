// Navbar con input para buscar y el logo y el icono del carro de compras
import React from 'react';
import { Row, Col, Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import logo from './../../img/Blue_Bag_ Shopping_Logo.jpg';
import './style.css';


const navbar = ({}) => {
    return (
                    <Navbar className='nav-bar'>
                        <Navbar.Header>
                            <Navbar.Brand className='logo'>
                                <a href="index.html"><img height={50} src={logo} alt={''}/></a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                    <Navbar.Collapse className='container-form'>
                        <Navbar.Form className='form-search'>
                            <FormGroup>
                                <FormControl type="text" placeholder="Ropa, Autos, etc..." />
                            </FormGroup>{' '}
                            <Button type="submit" bsStyle='success'>Buscar</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                    </Navbar>
    )

}

export default navbar;