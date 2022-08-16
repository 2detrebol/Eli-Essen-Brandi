import React, { useContext } from 'react'
import CartContext from '../../contexto/CartContex';
import './Cart.css'
import { Link, NavLink } from 'react-router-dom';

const Cart = () => {
    const { cart, getProductQuantity, removeItem, clearCart, sumarCantidad, restarCantidad } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <div className="cartEmpty">
                    <h1>Carrito vacio</h1>
                    <button><NavLink style={{ textDecoration: "none", color: "#000" }} className="vuelveInicio" to="/">Ir a comprar</NavLink></button>
                </div>
            ) : (
                <div className="cart">
                    <table className="tableCart">
                        <thead>
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
                        <tbody style={{ textTransform: 'uppercase' }}>
                            {cart.map(product => (
                                <tr key={product.id + product.IDColor}>
                                    <td><img src={product.img} alt={product.name} style={{ width: 215, height: 150 }}></img> </td>
                                    <td>{product.name}</td>
                                    <td>{product.color}</td>
                                    <td>$ {product.price}</td>
                                    <td><button disabled={product.quantity >= product.stock} onClick={() => sumarCantidad(product.IDColor)}> + </button> {product.quantity} <button disabled={product.quantity <= 1} onClick={() => restarCantidad(product.IDColor)}> - </button></td>
                                    <td>$ {product.price * product.quantity}</td>
                                    <td><button onClick={() => removeItem(product.IDColor)}>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cartFooter">
                        <h3>Total: $ {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h3>
                        <button onClick={clearCart}>Limpiar carrito</button>
                        <button><Link style={{ textDecoration: "none", color: "#000" }} className='botonPago' to="/pago">Ir a Pagar</Link></button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart;

