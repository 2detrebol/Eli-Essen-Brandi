import React, { useState } from 'react';
import "./ItemCount.css";


const Counter = ({ stock, onAdd, initial = 1, color, sinColor }) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    const colores = color === "terra" ? "#786B60" : color === "aqua" ? "#519692" : "#5E1519";

    return (
        <div className="containerCount animate__animated animate__zoomIn">
            <div className="cantidadProductos">
                <button disabled={count <= 1 || sinColor} onClick={restar} style={{ backgroundColor: colores }}>-</button>
                <h1>{count}</h1>
                <button style={{ backgroundColor: colores }} disabled={count >= stock || sinColor} onClick={aumentar} >+</button>
            </div>
            <button disabled={sinColor} className='botonAgregar' onClick={() => onAdd(count)} style={{ backgroundColor: colores }}>Comprar</button>
        </div>
    )
}

export default Counter