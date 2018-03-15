// Iconos con productos, si hay tiempo serán filtros
import React from "react";
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import './style.css';


const IconsProducts = ({ }) => {
    return (

        <Grid>
            <Row className="show-grid">

                <h2>Productos destacados</h2>
                <Col xs={3} md={3}>
                    <Glyphicon className="icon"  glyph="phone"/>
                </Col>
                <Col xs={3} md={3}>
                    <Glyphicon className="icon" glyph="camera" />
                </Col>
                <Col xs={3} md={3}>
                    <Glyphicon className="icon" glyph="book" />
                </Col>
                <Col xs={3} md={3}>
                    <Glyphicon className="icon" className="icon"glyph="cutlery" />
                </Col>
            </Row>
        </Grid>

    )

}





export default IconsProducts;