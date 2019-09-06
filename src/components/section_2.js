import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import flat from './img/flat.png';
import './components.css';
import medium from './img/medium.png';
class Section_2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = "plan" className = "section__2">
                <div className = "section__title">
                    <h1>PLANS</h1>
                </div>
                <Container>
                    <Row>
                        <Col sm = {6} xs = {12}>
                            <img src = { flat } />
                        </Col>
                        <Col sm = {6} xs = {12}>
                            <img src = { medium }/>
                        </Col>
                    </Row>

                </Container>

            </div>
         );
    }
}
 
export default Section_2;