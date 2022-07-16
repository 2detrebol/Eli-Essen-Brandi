import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FaShippingFast } from 'react-icons/fa';
import { BsCart3 } from "react-icons/bs";



function barraNav() {

    return (
        <Navbar fixed="top" className="navContainer">
            <Container className="containerLogoLinks">
                <div className="navLogo">
                    <button className="containerDibu"><img className="imglogo" src="./logo.png" alt="Logo Essen" /></button>
                    <div>
                        <FaShippingFast />
                        <p>ENVIOS SIN CARGO A TODO EL PAÍS</p>
                    </div>
                    <i><BsCart3 className="carritoLogo" /><span className="cartMenuNum">0</span></i>

                </div>
                <div className="containerLinks">
                    <Nav className="menuNav">
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
