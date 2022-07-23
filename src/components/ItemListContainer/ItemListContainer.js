import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import Items from './Items'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="nombreApp animate__animated animate__bounceIn animate__delay-1s">{greeting}</h1>
            <ItemCount />
            <Items />
        </div>
    )
}


export default ItemListContainer