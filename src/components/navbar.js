import React, { Component } from 'react';
import './components.css';
import {Navbar, Nav, Button} from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';
class Navbarr extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className = "pl-4" href="#home">FOODIES.<span>LOGO</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className = "ml-auto navhead">
                            <Nav.Link>ABOUT</Nav.Link>
                            <Nav.Link href = "#food">OUR FOOD</Nav.Link>
                            <Nav.Link href = "#plan">PLANS</Nav.Link>
                            <NavLink href = "#contact"><Button variant="warning">CONTACT</Button></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                

            
            </div>
            
          );
    }
}
 
export default Navbarr;

