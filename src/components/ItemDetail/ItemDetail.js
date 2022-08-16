import React, { useState, useContext, useEffect } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../contexto/CartContex';


const ItemDetail = ({ id, name, description, category, price, color, stock, imagenes, colorID }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const [cambioColor, setcambioColor] = useState(color);
    const handleOnClick = (colores) => {
        setcambioColor(colores);
    }

    const [IDColor, setIDColor] = useState(colorID);
    useEffect(() => {
        cambioColor && setIDColor(colorID[cambioColor])
    }, [cambioColor, colorID])


    const handleColor = () => {
        return cambioColor === "terra" ? "#786B60" : cambioColor === "aqua" ? "#519692" : "#5E1519";
    }

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const productToAdd = {
            id, name, price, quantity, img: imagenes[cambioColor], IDColor, stock: stock[cambioColor], color: [cambioColor]
        }
        addItem(productToAdd)
    }


    const [productoSinColor, setproductoSinColor] = useState(false);
    useEffect(() => {
        cambioColor && imagenes[cambioColor] === "https://i.imgur.com/ahbzZML.png" ? setproductoSinColor(true) : setproductoSinColor(false)
    },
        [cambioColor, imagenes])

    return (
        <div className="containerItemDetail">
            <div className="imgBxItemDetail">
                <span className="animate__animated animate__tada">{name}</span>
                {cambioColor && <img src={imagenes[cambioColor]} alt={name} className="animate__animated animate__lightSpeedInLeft animate__delay-1s" />}
                <div className="productDetailColors animate__animated animate__zoomIn animate__delay-2s" >
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("terra")} className={cambioColor === "terra" ? "active" : ""} style={{ backgroundColor: "#786B60" }}></button>
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("aqua")} className={cambioColor === "aqua" ? "active" : ""} style={{ backgroundColor: "#519692" }}></button>
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("cherry")} className={cambioColor === "cherry" ? "active" : ""} style={{ backgroundColor: "#5E1519" }}></button>
                </div>
            </div>
            <div className="detailsItemDetail">
                <div className="contentItemDetail">
                    <h2 style={{ color: handleColor() }} className="animate__animated animate__fadeInDown animate__delay-3s">{category}</h2>
                    <p className="animate__animated animate__fadeInUp animate__delay-3s">{description}</p>
                    <div className="priceContainer animate__animated animate__flipInX">
                        <h3 style={{ color: handleColor() }} className="animate__animated animate__rubberBand"> $ {price}</h3>
                    </div>
                    {quantity === 0 ? (
                        <ItemCount sinColor={productoSinColor} stock={stock} onAdd={handleOnAdd} initial={1} color={cambioColor} />
                    ) : (<div className="contenedorAgregados animate__animated animate__heartBeat">
                        <p className='productosAgregados' style={{ textTransform: 'uppercase', color: handleColor() }}>Se han agregado {quantity} unidades de color {cambioColor} </p>
                        <Link className='botonPagar' to="/cart" style={{ backgroundColor: handleColor() }}>Ir al carrito</Link></div>)}

                </div>
            </div>
        </div>
    )
}

export default ItemDetail