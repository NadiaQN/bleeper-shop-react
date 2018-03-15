// Pie de pagina
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import imgPaypal from '../../img/paypal.png';
import './style.css'

const Footer = ({}) => {
    return(
    
        <Row className="show-grid in-foo">
           <Col xs={6} md={4}>
             <ul>
               <li><a href="">Sobre Nosotros</a></li>
                 <li><a href="">Mapa del sitios</a></li>
                 <li><a href="">Otros sitios</a></li>
                 <li><a href="">Ayuda</a></li>
              </ul> 
            </Col>
              <Col xs={6} md={8}>
                <div className="img-paypal">
                    <a href="index.html"><img height={90} src={imgPaypal} responsive alt={''} /></a>
                </div>
                <h6>Copyright © 1999-2018 Bleeper-shop Ltda</h6>
            </Col>
        </Row>
    
        
   )
   
}
export default Footer;