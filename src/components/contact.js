import React, { Component } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import MapContainer from './map';
import './components.css';
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = "contact" className = "contact">
                <Container>
                    <Row>
                        <h1>Contact Us</h1>
                    </Row>
                    <Row>
                        
                        <Col sm = {4}>
                            <div className = "contact__form mt-5">
                                <form>
                                    <div className = "mt-3"><input type = "text" placeholder = "Full Name"/></div>
                                    <div className = "mt-3"><input type = "number" placeholder = "Phone No."/></div>
                                    <div className = "mt-3"><textarea cols = "23">Message</textarea></div>
                                    <div><input type = "checkbox" /><span>I agree with all conditions</span></div>
                                </form>
                                <div className = "contact__button">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </Col>
                        <div className = "d-none d-sm-block">
                    <MapContainer className = "z"/>
                    </div>
                        
                        
                    </Row>
      
                 
                </Container>
            </div>
         );
    }
}
 
export default Contact;