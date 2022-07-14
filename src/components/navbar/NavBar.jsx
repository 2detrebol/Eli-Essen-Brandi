import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function barraNav() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img src="./logo.png" alt="Logo Essen" style={{ width: '15%' }} /></Navbar.Brand>
                <Nav className="me-auto menuNav">
                    <Nav.Link href="#cacerolas">Caserolas</Nav.Link>
                    <Nav.Link href="#sartenes">Sarténes</Nav.Link>
                    <Nav.Link href="#complementos">Complementos</Nav.Link>
                    <Nav.Link href="#recetas">Recetas</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
}

export default barraNav;
