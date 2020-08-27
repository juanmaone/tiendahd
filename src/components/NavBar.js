import React from "react";
import { Navbar, Form, Nav, Button } from "react-bootstrap";
import Cart from "./CartIcon";

import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="#home">Tienda HD</Navbar.Brand>
            <Navbar.Brand href="#conditions">Condiciones</Navbar.Brand>
            <Navbar.Brand href="#articles">Artículos</Navbar.Brand>
            <Navbar.Brand href="#contact">Contacto</Navbar.Brand>
            
          </Nav>
          <Form inline>
            <Button variant="primary"><span>Comprar</span>   <Cart name="cartIcon" /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
