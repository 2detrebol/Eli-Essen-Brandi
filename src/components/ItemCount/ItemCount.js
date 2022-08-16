import React, { useEffect, useState } from 'react';
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

    const [stockColor, setStockColor] = useState();
    useEffect(() => {
        setStockColor(stock && stock[color])
        count > stockColor ? setCount(stockColor) :
            count < 1 ? setCount(1) : setCount(count)
    }, [stock, color, count, stockColor])


    return (
        <div className="containerCount animate__animated animate__zoomIn">
            {stockColor === 0 ? (
                <div className="noStock animate__animated animate__zoomIn">
                    <p className="animate__animated animate__tada" style={{ color: colores }} >SIN STOCK</p>
                </div>
            ) : (<>
                <div className="cantidadProductos">
                    <button disabled={count <= 1 || sinColor} onClick={restar} style={{ backgroundColor: colores }}>-</button>
                    <h1 style={{ visibility: sinColor ? "hidden" : "visible" }}>{count}</h1>
                    <button style={{ backgroundColor: colores }} disabled={count >= stockColor || sinColor} onClick={aumentar} >+</button>
                </div>
                <button disabled={sinColor} className='botonAgregar' onClick={() => onAdd(count)} style={{ backgroundColor: colores }}>Agregar</button>
            </>)
            }
        </div>
    )
}

export default Counter