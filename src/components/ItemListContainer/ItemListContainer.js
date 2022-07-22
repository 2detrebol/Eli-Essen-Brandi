import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="nombreApp animate__animated animate__bounceIn animate__delay-1s">{greeting}</h1>
            <ItemCount />
        </div>
    )
}


export default ItemListContainer