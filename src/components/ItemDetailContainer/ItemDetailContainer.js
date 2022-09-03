import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, "items", id)).then(response => {
            const data = response.data()
            const adaptedProduct = { id: response.id, ...data }
            setProductDetail(adaptedProduct)
        }).finally(() => {
            setLoading(false)
        })
    }, [id]);

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <>
            <ItemDetail {...productDetail} />
        </>
    )
}
export default ItemDetailContainer;
