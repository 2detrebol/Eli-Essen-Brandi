import { useState } from 'react'
import "./ItemCount.css"

const Counter = () => {
    const [count, setCount] = useState(1)
    const [text, setText] = useState('Título Producto')

    const aumentar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

    let stock = 10;

    return (
        <div className="containerCount animate__animated animate__fadeIn animate__delay-2s">
            <h1 className='tituloProducto'>{text}</h1>
            <div className="cantidadProductos">
                <button disabled={count <= 1} onClick={restar}>-</button>
                <h1>{count}</h1>
                <button disabled={count >= stock} onClick={aumentar}>+</button>
            </div>
        </div>
    )
}

export default Counter