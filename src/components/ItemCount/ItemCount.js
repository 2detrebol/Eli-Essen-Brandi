import React, { useEffect, useState } from 'react';
import "./ItemCount.css";


const Counter = ({ stock, onAdd, initial = 1, color, withoutColor }) => {
    const [count, setCount] = useState(initial)

    const add = () => {
        setCount(count + 1)
    }

    const less = () => {
        setCount(count - 1)
    }

    const colors = color === "terra" ? "#786B60" : color === "aqua" ? "#519692" : "#5E1519";

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
                    <p className="animate__animated animate__tada" style={{ color: colors }} >SIN STOCK</p>
                </div>
            ) : (<>
                <div className="productsQuantity">
                    <button disabled={count <= 1 || withoutColor} onClick={less} style={{ backgroundColor: colors }}>-</button>
                    <h1 style={{ visibility: withoutColor ? "hidden" : "visible" }}>{count}</h1>
                    <button style={{ backgroundColor: colors }} disabled={count >= stockColor || withoutColor} onClick={add} >+</button>
                </div>
                <button disabled={withoutColor} className='buttonToAdd' onClick={() => onAdd(count)} style={{ backgroundColor: colors }}>Agregar</button>
            </>)
            }
        </div>
    )
}

export default Counter