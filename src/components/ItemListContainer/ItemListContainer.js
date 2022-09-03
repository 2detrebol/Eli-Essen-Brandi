import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../service/firebase/index'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const [loading, setLoading] = useState(false)

    const webTittle = category ? category : "Bienvenidos a Eli Essen - Casero & Saludable"

    useEffect(() => {
        setLoading(true)
        const collectionRef = !category
            ? collection(db, "items")
            : query(collection(db, "items"), where("category", "==", category))
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(item => {
                const data = item.data()
                return { id: item.id, ...data }
            })
            setProducts(productsAdapted)
        })
            .finally(() => {
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