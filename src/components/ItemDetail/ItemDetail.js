import React from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ img, name, description, category, price, color, stock }) => {
    let colores = () => {
        switch (color) {
            case "terra":
                return "#786B60";
            case "aqua":
                return "#519692";
            default: return "#5E1519";
        }
    }

    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`);
    }


    return (
        <div className="containerItemDetail">
            <div className="imgBxItemDetail">
                <span className="animate__animated animate__tada animate__delay-2s">{name}</span>
                <img src={img} alt={name} className="animate__animated animate__lightSpeedInLeft animate__delay-3s" />
                <p className="productDetailColors animate__animated animate__zoomIn animate__delay-4s" >
                    <span className="aqua" ></span>
                    <span className="terra active"></span>
                    <span className="cherry"></span>
                </p>
            </div>
            <div className="detailsItemDetail">
                <div className="contentItemDetail">
                    <h2 className="animate__animated animate__fadeInDown animate__delay-5s" style={{ color: colores() }}>{category}</h2>
                    <p className="animate__animated animate__fadeInUp animate__delay-5s">{description}</p>
                    <div className="priceContainer animate__animated animate__zoomIn">
                        <h3 className="animate__animated animate__heartBeat"> $ {price}</h3>
                    </div>
                    <ItemCount stock={stock} onAdd={handleOnAdd} color={color} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail