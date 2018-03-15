// Carrusel de imagenes que irá en la pagina principal
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import HappyEaster from './../../img/happy_easter.jpg';
import School from './../../img/school.jpg';
import Lollapalooza from './../../img/lola.jpg';
import './style.css';


const carousel = ({}) => {
    return (
        <Carousel bsClass='carousel'>
            <Carousel.Item>
                <img alt={"Happy Easter Egg 2018"} src={HappyEaster} />
            </Carousel.Item>
            <Carousel.Item>
                <img alt={"Vuelta a Clases"} src={School} />
            </Carousel.Item>
            <Carousel.Item>
                <img alt={"Lollapalooza"} src={Lollapalooza} />
            </Carousel.Item>
        </Carousel>

    )
}

export default carousel;