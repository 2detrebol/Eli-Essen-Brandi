import React, { useState, useEffect } from 'react'
import "./Recipes.css"

const Recipes = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading) {
        return <div className="containerLoading">
            <img src="../img/logo.png" className="logoLoading" alt="logo" />
            <p className="animate__animated animate__flash animate__infinite	infinite"> Cargando...</p>
        </div>
    }

    return (
        <h1 className="tittleRecipes animate__animated animate__bounceIn">Recetas</h1>
    )
}

export default Recipes;
