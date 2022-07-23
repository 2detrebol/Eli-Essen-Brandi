import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <div>
            <h1 className="nombreApp animate__animated animate__bounceIn animate__delay-1s">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer