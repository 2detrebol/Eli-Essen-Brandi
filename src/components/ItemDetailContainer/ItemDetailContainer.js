import React, { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState();
    const { id } = useParams();

    useEffect(() => {
        getProductsById(id).then((responde) => {
            setProductDetail(responde);
        })
    }, [id]);


    return (
        <>
            <ItemDetail {...productDetail} />
        </>
    )
}
export default ItemDetailContainer;
