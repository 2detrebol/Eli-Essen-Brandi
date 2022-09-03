import React, { useState, useContext, useEffect } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContex';

const ItemDetail = ({ id, name, description, category, price, color, stock, images, colorID }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const [colorChange, setColorChange] = useState(color);
    const handleOnClick = (colors) => {
        setColorChange(colors);
    }

    const [IDColor, setIDColor] = useState(colorID);
    useEffect(() => {
        colorChange && setIDColor(colorID[colorChange])
    }, [colorChange, colorID])


    const handleColor = () => {
        return colorChange === "terra" ? "#786B60" : colorChange === "aqua" ? "#519692" : "#5E1519";
    }

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const productToAdd = {
            id, name, price, quantity, img: images[colorChange], IDColor, stock: stock[colorChange], color: [colorChange]
        }
        addItem(productToAdd)
    }

    const [productWithoutColor, setProductWithoutColor] = useState(false);
    useEffect(() => {
        colorChange && images[colorChange] === "https://i.imgur.com/ahbzZML.png" ? setProductWithoutColor(true) : setProductWithoutColor(false)
    },
        [colorChange, images])

    return (
        <div className="containerItemDetail">
            <div className="imgBxItemDetail">
                <span className="animate__animated animate__tada">{name}</span>
                {colorChange && <img src={images[colorChange]} alt={name} className="animate__animated animate__lightSpeedInLeft animate__delay-1s" />}
                <div className="productDetailColors animate__animated animate__zoomIn animate__delay-2s" >
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("terra")} className={colorChange === "terra" ? "active" : ""} style={{ backgroundColor: "#786B60" }}></button>
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("aqua")} className={colorChange === "aqua" ? "active" : ""} style={{ backgroundColor: "#519692" }}></button>
                    <button disabled={quantity !== 0} onClick={() => handleOnClick("cherry")} className={colorChange === "cherry" ? "active" : ""} style={{ backgroundColor: "#5E1519" }}></button>
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
                        <ItemCount withoutColor={productWithoutColor} stock={stock} onAdd={handleOnAdd} initial={1} color={colorChange} />
                    ) : (<div className="containerAdded animate__animated animate__heartBeat">
                        <p className='productsAdded' style={{ textTransform: 'uppercase', color: handleColor() }}>Se han agregado {quantity} unidades de color {colorChange} </p>
                        <Link className='buttonToCart' to="/cart" style={{ backgroundColor: handleColor() }}>Ir al carrito</Link></div>)}

                </div>
            </div>
        </div>
    )
}

export default ItemDetail