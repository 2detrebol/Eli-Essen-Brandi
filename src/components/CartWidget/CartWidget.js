import React, { useContext } from 'react'
import './CartWidget.css'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom'
import CartContext from '../../contexto/CartContex';


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const colorQuantityBack = quantity > 0 ? '#E5781A' : '#000'
    const colorQuantityNumber = quantity > 0 ? '#000' : '#E5781A'


    return (
        <div className="animate__animated animate__fadeInRight animate__delay-1s">
            <Link className="cartWidget" to={`/cart`}>
                <BsCart3 className="carritoLogo" />
                <span className="cartMenuNum" style={{ backgroundColor: colorQuantityBack, color: colorQuantityNumber }}>{quantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget