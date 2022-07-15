import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FaShippingFast, FaShoppingCart } from 'react-icons/fa';

function barraNav() {
    return (
        <Navbar fixed="top" className="navContainer">
            <Container className="containerLogoLinks">
                <div className="navLogo">
                    <Navbar.Brand href="#home" className="containerImg">
                        <img className="imgLogo" src="./logo.png" alt="Logo Essen" />
                    </Navbar.Brand>
                    <div>
                        <FaShippingFast />
                        <p>ENVIOS SIN CARGO A TODO EL PAÍS</p>
                    </div>
                    <FaShoppingCart className="carritoLogo" />
                </div>
                <div className="containerLinks">
                    <Nav className="me-auto menuNav">
                        <Nav.Link className="linkNav" href="#cacerolas">Caserolas</Nav.Link>
                        <Nav.Link className="linkNav" href="#sartenes">Sarténes</Nav.Link>
                        <Nav.Link className="linkNav" href="#complementos">Complementos</Nav.Link>
                        <Nav.Link className="linkNav" href="#recetas">Recetas</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar >
    );
}

export default barraNav;
