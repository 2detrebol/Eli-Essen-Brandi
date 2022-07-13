import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'light-grey' }}>
        <Container>
          <Navbar.Brand href="#home"><img src="./logo.png" alt="Logo Essen" style={{ width: '15%' }} /></Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: '1.5rem', color: '#E5781A' }}>
            <Nav.Link href="#cacerolas">Caserolas</Nav.Link>
            <Nav.Link href="#sartenes">Sarténes</Nav.Link>
            <Nav.Link href="#complementos">Complementos</Nav.Link>
            <Nav.Link href="#recetas">Recetas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
