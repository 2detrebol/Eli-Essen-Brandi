import React, { useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ name, description, category, price, color, stock, imagenes }) => {

    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`);
    }

    const [cambioColor, setcambioColor] = useState(color);
    const handleOnClick = (colores) => {
        setcambioColor(colores);
    }

    const handleColor = () => {
        switch (cambioColor) {
            case "terra":
                return "#786B60";
            case "aqua":
                return "#519692";
            default: return "#5E1519";
        }
    }


    return (
        <div className="containerItemDetail">
            <div className="imgBxItemDetail">
                <span className="animate__animated animate__tada">{name}</span>
                {cambioColor && <img src={imagenes[cambioColor]} alt={name} className="animate__animated animate__lightSpeedInLeft animate__delay-1s" />}
                <div className="productDetailColors animate__animated animate__zoomIn animate__delay-2s" >
                    <button onClick={() => handleOnClick("terra")} className={cambioColor === "terra" ? "active" : ""} style={{ backgroundColor: "#786B60" }}></button>
                    <button onClick={() => handleOnClick("aqua")} className={cambioColor === "aqua" ? "active" : ""} style={{ backgroundColor: "#519692" }}></button>
                    <button onClick={() => handleOnClick("cherry")} className={cambioColor === "cherry" ? "active" : ""} style={{ backgroundColor: "#5E1519" }}></button>
                </div>
            </div>
            <div className="detailsItemDetail">
                <div className="contentItemDetail">
                    <h2 style={{ color: handleColor() }} className="animate__animated animate__fadeInDown animate__delay-3s">{category}</h2>
                    <p className="animate__animated animate__fadeInUp animate__delay-3s">{description}</p>
                    <div className="priceContainer animate__animated animate__flipInX">
                        <h3 style={{ color: handleColor() }} className="animate__animated animate__rubberBand"> $ {price}</h3>
                    </div>
                    <ItemCount stock={stock} onAdd={handleOnAdd} color={cambioColor} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail