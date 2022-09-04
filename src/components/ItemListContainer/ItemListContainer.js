import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../service/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = () => {
    const { category } = useParams()

    const getProductsFromFirestore = () => getProducts(category)
    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [category])

    const webTittle = category ? category : "Bienvenidos a Eli Essen - Casero & Saludable"

    if (isLoading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    if (error) {
        return <h1>Hubo un error, contacte al Administrador</h1>
    }

    return (
        <div>
            <h1 className="appName animate__animated animate__bounceIn">{webTittle}</h1>
            <ItemList products={data} />
        </div>
    )
}

export default ItemListContainer