import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import pizza from './img/pizza.png';
import add from './img/add.png';
import './components.css';
class Section_1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = "food" className = "section__1">
                <Row>
                    <Col sm = {6} xs = {12}>
                        <img src = {pizza}/>

                    </Col>
                    <Col sm = {6} xs = {12}>
                        
                        <Row>
                            <Col sm = {12}><h1>Our Food</h1></Col>
                        </Row>
                        <Row className = "mt-3">
                            <Col sm ={1} xs = {1}>
                            <img src = {add}/>
                            </Col>
                            <Col sm = {11} xs = {11}>
                            <div><h3>Signature Pizzas</h3></div>
                            <div><span>choose one of our plans enter delivery time</span></div>
                            </Col>
                        </Row>
                        <Row className = "mt-3">
                        <Col sm ={1} xs = {1}>
                            <img src = {add}/>
                            </Col>
                            <Col sm = {11} xs = {11}>
                            <div><h3>Oven-Baked Subs</h3></div>
                            <div><span>choose one of our plans enter delivery time</span></div>
                            </Col>
                        </Row>
                        <Row className = "mt-3">
                        <Col sm ={1} xs = {1}>
                            <img src = {add}/>
                            </Col>
                            <Col sm = {11} xs = {11}>
                            <div><h3>Wings, Sides & More</h3></div>
                            <div><span>choose one of our plans enter delivery time</span></div>
                            </Col>
                        </Row>

                        <div>
                            <button>Order food</button>
                        </div>

                    </Col>
                </Row>

            </div>
         );
    }
}
 
export default Section_1;