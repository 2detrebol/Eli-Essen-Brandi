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
        <>
            <h1 className="tittleRecipes animate__animated animate__bounceIn">Recetas</h1>
            <div className="videos">
                <video className="video1" width="880" height="560" src="https://i.imgur.com/TQmiDnf.mp4" controls alt="Pepas de membrillo"></video>
                <video className="video2" width="440" height="280" src="https://i.imgur.com/kejjuHi.mp4" controls alt="Torta húmeda con frutas"></video>
                <video className="video3" width="440" height="280" src="videofile.ogg" controls alt="Video no soportado"></video>

            </div>

        </>
    )
}

export default Recipes;
