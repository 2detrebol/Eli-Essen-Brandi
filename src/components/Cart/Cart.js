import React, { useContext } from 'react'
import CartContext from '../../context/CartContex';
import './Cart.css'
import { Link, NavLink } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md'

const Cart = () => {
    const { cart, getTotal, removeItem, clearCart, addQuantity, lessQuantity } = useContext(CartContext)
    const total = getTotal()

    return (
        <>
            {cart.length === 0 ? (
                <div className="cartEmpty animate__animated fadeIn">
                    <h1 className="animate__animated animate__bounceIn">Su carrito esta vacio</h1>
                    <div className="containerBackHome animate__animated animate__tada">
                        <NavLink style={{ textDecoration: "none", color: "#000" }} className="backHome" to="/">Ir a comprar</NavLink>
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <table className="tableCart">
                        <thead className="animate__animated animate__fadeInDown">
                            <tr>
                                <th />
                                <th>Producto</th>
                                <th>Color</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody className="animate__animated animate__zoomIn">
                            {cart.map(product => (
                                <tr key={product.id + product.IDColor}>
                                    <td><img src={product.img} alt={product.name} style={{ width: 215, height: 150 }}></img> </td>
                                    <td>{product.name}</td>
                                    <td>{product.color}</td>
                                    <td>$ {product.price}</td>
                                    <td><button className='buttonQuantity' disabled={product.quantity <= 1} onClick={() => lessQuantity(product.IDColor)}> - </button>{product.quantity} <button className='buttonQuantity' disabled={product.quantity >= product.stock} onClick={() => addQuantity(product.IDColor)}> + </button> </td>
                                    <td>$ {product.price * product.quantity}</td>
                                    <td><button className='buttonRemove' onClick={() => removeItem(product.IDColor)}><MdDeleteForever /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cartFooter">
                        <h3 className="animate__animated animate__fadeInUp">Total: $ {total}</h3>
                        <button className='buttonClear animate__animated animate__slideInLeft' onClick={clearCart}>Vaciar carrito</button>
                        <button className='containerConfirm animate__animated animate__slideInRight'>
                            <Link className='buttonConfirm' style={{ textDecoration: "none", color: "#000" }} to="/checkout">Confirmar orden</Link>
                        </button>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Cart;

