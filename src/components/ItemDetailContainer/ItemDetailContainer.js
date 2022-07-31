import React, { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProductsById(id).then((responde) => {
            setProductDetail(responde);
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoCargando" alt="logo" />
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
