import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(false)

    const tituloPagina = category ? category : "Bienvenidos a Eli Essen - Casero & Saludable"

    useEffect(() => {
        setLoading(true)
        const asyncFuncion = category ? getProductsByCategory : getProducts
        asyncFuncion(category).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [category])

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoCargando" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <div>
            <h1 className="nombreApp animate__animated animate__bounceIn">{tituloPagina}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer