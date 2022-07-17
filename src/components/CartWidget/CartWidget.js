import React from 'react'
import './CartWidget.css'
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="animate__animated animate__fadeInRight animate__delay-1s"><BsCart3 className="carritoLogo" />
            <span className="cartMenuNum">0</span>
        </div>
    );
}

export default CartWidget