import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import NavLinks from '../Navlinks/NavLinks';
import './NavBar.css';



function barraNav() {

    return (
        <Navbar sticky="top" className="navContainer">
            <div className="navLogo animate__animated animate__fadeIn animate__delay-1s">
                <button className="containerDibu animate__animated animate__fadeInLeft animate__delay-1s" href="#home">
                    <img className="imglogo" src="img/logo.png" alt="Logo Essen" />
                </button>
                <div className="envios animate__animated animate__fadeInDown animate__delay-1s">
                    <FaShippingFast />
                    <p>ENVIOS SIN CARGO A TODO EL PAÍS</p>
                </div>
                <CartWidget />
            </div>
            <NavLinks />
        </Navbar >
    );
}

export default barraNav;