import React, { useState } from 'react';
import "./ItemCount.css";


const Counter = ({ stock, onAdd, initial = 1, color }) => {

    const [count, setCount] = useState(initial)

    const aumentar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    const colores = () => {
        switch (color) {
            case "terra":
                return "#786B60";
            case "aqua":
                return "#519692";
            default: return "#5E1519";
        }
    }

    return (
        <div className="containerCount animate__animated animate__zoomIn">
            <div className="cantidadProductos">
                <button disabled={count <= 1} onClick={restar} style={{ backgroundColor: colores() }}>-</button>
                <h1>{count}</h1>
                <button style={{ backgroundColor: colores() }} disabled={count >= stock} onClick={aumentar} >+</button>
            </div>
            <button className='botonAgregar' onClick={() => onAdd(count)} style={{ backgroundColor: colores() }}>Comprar</button>
        </div>
    )
}

export default Counter