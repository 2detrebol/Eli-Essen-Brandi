import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../service/firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(false)

    const webTittle = category ? category : "Bienvenidos a Eli Essen - Casero & Saludable"

    useEffect(() => {
        setLoading(true)
        getProducts(category).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [category])

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <div>
            <h1 className="appName animate__animated animate__bounceIn">{webTittle}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer