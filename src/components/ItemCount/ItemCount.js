import { useState } from 'react'
import "./ItemCount.css"

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const aumentar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    return (
        <div className="containerCount animate__animated animate__fadeIn animate__delay-2s">
            <div className="cantidadProductos">
                <button disabled={count <= 1} onClick={restar}>-</button>
                <h1>{count}</h1>
                <button disabled={count >= stock} onClick={aumentar}>+</button>
            </div>
            <button className='botonAgregar' onClick={() => onAdd(count)}>Añadir al carrito</button>
        </div>
    )
}

export default Counter