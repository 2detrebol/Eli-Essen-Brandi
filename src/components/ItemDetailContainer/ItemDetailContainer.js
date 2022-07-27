import React, { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts
            .then((resp) =>
                setProductDetail(resp.find((products) => products.id === (id)))
            )
            .catch((rej) => console.log(rej))
    }, [id]);

    return (
        <ItemDetail productDetail={productDetail[id]} />
    )
}
export default ItemDetailContainer;
