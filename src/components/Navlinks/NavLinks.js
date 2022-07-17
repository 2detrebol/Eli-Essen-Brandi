import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="containerLinks">
            <Nav className="menuNav animate__animated animate__fadeIn animate__delay-1s">
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="#cacerolas">Caserolas</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="#sartenes">Sarténes</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="#complementos">Complementos</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="#recetas">Recetas</Nav.Link>
            </Nav>
        </div>
    );
}

export default NavLinks;