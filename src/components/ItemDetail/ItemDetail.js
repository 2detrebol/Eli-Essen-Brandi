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
                <span>{name}</span>
                <img src={img} alt={name} className="animate__animated animate__fadeInUp animate__delay-3s" />
                <p className="productDetailColors animate__animated animate__fadeIn animate__delay-2s" >
                    <span className="aqua" ></span>
                    <span className="terra active"></span>
                    <span className="cherry"></span>
                </p>
            </div>
            <div className="detailsItemDetail">
                <div className="contentItemDetail">
                    <h2 style={{ color: colores() }}>{category}</h2>
                    <p>{description}</p>
                    <h3 className="animate__animated animate__fadeIn animate__delay-2s"> $ {price}</h3>
                    <ItemCount stock={stock} onAdd={handleOnAdd} color={color} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail