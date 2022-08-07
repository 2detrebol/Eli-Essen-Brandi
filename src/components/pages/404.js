import React, { useState, useEffect } from 'react'
import './404.css';

const NoEncontrada = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoCargando" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <div className='container404 animate__animated animate__fadeIn'>
            <img src="https://i.imgur.com/BirJ9jh.png" className="logo404 animate__animated animate__zoomIn" alt="logo" />
            <h3 className='titulo404 animate__animated animate__flipInX'> 404 - Página no encontrada </h3>
        </div>
    )
}

export default NoEncontrada