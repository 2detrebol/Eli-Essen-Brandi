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

    const tituloPagina = category ? category : "Bienvenidos a Eli Essen - Casero & Saludable"

    useEffect(() => {
        setLoading(true)

        const collectionRef = !category
            ? collection(db, "items")
            : query(collection(db, "items"), where("category", "==", category))
        getDocs(collectionRef).then(response => {
            const productsAdaptados = response.docs.map(item => {
                const data = item.data()
                return { id: item.id, ...data }
            })
            setProducts(productsAdaptados)
        })
            .finally(() => {
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