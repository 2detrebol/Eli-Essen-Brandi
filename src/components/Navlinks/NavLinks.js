import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="containerLinks">
            <Nav className="menuNav animate__animated animate__fadeIn animate__delay-1s">
                <NavLink className="linkNav animate__animated animate__fadeIn animate__delay-1s" to="/Cacerolas">Cacerolas</NavLink>
                <NavLink className="linkNav animate__animated animate__fadeIn animate__delay-1s" to="/Sartenes">Sarténes</NavLink>
                <NavLink className="linkNav animate__animated animate__fadeIn animate__delay-1s" to="/Complementos">Complementos</NavLink>
                <NavLink className="linkNav animate__animated animate__fadeIn animate__delay-1s" to="/Recetas">Recetas</NavLink>
            </Nav>
        </div>
    );
}

export default NavLinks;